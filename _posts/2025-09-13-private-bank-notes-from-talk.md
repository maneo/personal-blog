---
layout: post
title: How to build family bank in a few easy steps
---

Five years ago, together with my wife we started a discussion about a more systemic approach to teaching our children how to deal with money. Those of you who are parents for sure will name several options, like: pocket money paid every month, money paid for home duties (aka "cheap youth labour"), money give away (aka "grandma mode"), whenever kid come and ask for. Our kids, at that time were 5, 8 and 11, they didn’t have huge needs in terms of their personal spendings so the first two mentioned approaches didn’t make too much sense. The last one would work.. of course, but it is not very educational.

Looking at financial authorities close to our hearts we’ve finally decided that we will focus on teaching them how to save money and to some extent how to become rentiers 🙂

We wanted to teach that if they will save money, instead of spending them right away, they have a chance to earn interests and buy something bigger “without” parents support.

That’s how **Drachma Bank** and its private banking program was born. Our children were offered a 10% interest rate... this was not very realistic and was definitely expensive but... it attracted many interested clients who were not my children... 🤷‍♂️

Here is the first version of: paper sheet placed on the fridge, simple table in which we were noting down incomes and expenses. Every last day of the month I was manually calculating interests and changing the balance of accounts. When children were spending money me or my wife were making adjustments in this table. 

![first version of Drachma bank]({{site.baseurl}}/assets/images/posts/drachma_proto.png)

Drawbacks of such an approach were quite visible:
* lack of privacy
* you need to remember about last day of month to manually update tables
* paper sheet and manual writing has its limitations

I had some ideas to deal with some of them (including google calendar, moving paper sheet from fridge to back door of kitchen cabinet), but it was the right time to move this product into XXI century and create simple webapp to keep track of what. It was the right time to introduce internet banking!

I am from Poznań, people from Poznań are close relatives of people from Kraków and Scotish crowd in terms of frugality. So I’ve decided that my platform of choice will be free tier, available at that time at Heroku. This included 1 vCPU, 5min living dyno and access to a few megabytes of postgresql database. It was also time to refresh my Java, Spring and Hibernate skills - unused for a while, because of my weird professional choices 🙂. 

After investing a few evenings and weekends I had 4-5k lines of code, a lot of unit and integrational tests and.. a beautiful Twitter bootstrap based webapp which was the internet equivalent of a sheet of paper on the fridge. 

![2nd version of Drachma bank]({{site.baseurl}}/assets/images/posts/drachma_2nd_ver.png)

It perfectly addresed all drawbacks of previous version of Drachma bank:
* separate admin and client’s accounts - grandma will not know how much many children have.
* scheduled task which was responsible for calculating interest rates
* no need to worry about space on sheet of paper

The product launch was very successful. The developer was really proud of himself. Cool.

It didn’t take long when pains of maintenance started to show its teeth. 
* Heroku announced the deprecation of the Java version which I’ve used - it was not a huge problem. Upgrading took one weekend.
* I had to add a quite crucial feature - password recovery, because even the admin forgets his password from time to time.
* Heroku announced deprecation of support for postgresql in the free tier - upgrade was far from my desired cost - which was 0 PLN.

Product wise conclusions from this stage of product development, was the following:
* clients really liked how the page looked... and quickly forgot their logins and passwords.
* despite being mobile ready, my children preferred to simply come by to me and ask how much money do they have in their account - only admin account was used

With the growing costs of maint and hosting, I decided to dedicate a weekend to develop a POC of a new version of Drachma bank, using modern, well tested, highly accessible no code platform - Google Spreadsheet.

After 3 hours of work, I have a new version ready. 
* Central spreadsheet allowing me to add expenses to each tab (tab per client), 
* Instead of 4-5k lines of Java/JS, 69 lines of javascript to calculate interest rate and send email notification about balance to clients. 
* using builtin support for periodical triggering of spreadsheet macros.

![3rd version of Drachma bank]({{site.baseurl}}/assets/images/posts/drachma_3rd_ver.png)

In July 2023 I removed the Java app from heroku and migrated my clients to “Google cloud” 🙂. As I wrote entire app is 69 lines of code, here it is:
```javascript
// name of tab in spreadsheet
const first_account_handle = "F.";

let pln_formatter = Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
});

// entry function which is invoked from periodic task
function addInterestToAccountF() {
  addInterest(first_account_handle);
  var filip_balance = readBalance(first_account_handle);
  sendEmail("F","........@gmail.com", filip_balance);
};


function addInterest(sheetName) {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName(sheetName);
  sheet.getRange('B2').activate()
  sheet.insertRowsBefore(spreadsheet.getActiveRange().getRow(), 1);
  sheet.getActiveRange().offset(0, 0, 1, spreadsheet.getActiveRange().getNumColumns()).activate();
  sheet.getRange('A2').activate();
  sheet.getCurrentCell().setValue('incoming');
  sheet.getRange('B2').activate();
  sheet.getCurrentCell().setValue('interest');
  console.info("odsetki dodane");
  sheet.getRange('C2').activate();
  sheet.getCurrentCell().setFormula('=0,1*D3');
  console.info("wartosc wyliczona");
  sheet.getRange('D2').activate();
  sheet.getCurrentCell().setFormula('=D3+C2');
  sheet.getRange('E2').activate();
  console.info("saldo wyliczone");
  sheet.getCurrentCell().setValue(Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd"));
  sheet.getRange('E3').activate();
  console.info(sheetName + " added");
};

function readBalance(sheetName) {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName(sheetName);
  var balance = sheet.getRange('D2').getValue();
  console.info("account balance for today: " + pln_formatter.format(balance));
  return balance;
}

function sendEmail(name, recipient, balance) {
  MailApp.sendEmail({
    to: recipient,
    subject: "Your account balanace",
    htmlBody: "Witaj " + name + "! <br>" +
      "Your account balanaceStan: " + pln_formatter.format(balance) + " <br> Have a great day!",
  });
  console.info("email sent");
}

```

Benefits?
* zero maintenance costs since then.
* most of the benefits of previous version 
* still easy to make modifications in the logic
* easy to share admin rights

It was also time to summarize educational part of this experiment. When our son started to borrow money to deposit them in Drachma bank, get interest and then return loans, together with my wife we summarized this experiment as successful. The bank is still operating but we dramatically cut interest rates as the power of compound interest started to kick heavily in our wallets. 

Final conclusions: 
* products are evolving - users will change their mind, we will find better ways to satisfy them (sometimes by cutting features). successful software is a living creature.
* right tool for the job - this is a slogan we all know but still sometimes forget that solving problem using Google Spread or this ugly BASH script can be faster and more efficient than writing bulletproof solution in serious programing languages. extend your toolbox and remember to have there both old hits (like bash) and new shinny things (copilot)
* maint is unavoidable - libraries, platforms, environments evolve and our software product need to keep up the pace, to deliver the same quality of services. choosing right tool/tech/platform can significantly reduce maint but it will not eliminate it.
* having kids can be expensive but allows you to learn a lot 🙂

___

**Original title of a talk:** Evolution of private banking product in 10 minutes.

**Abstract:** This is an AI free talk. I wanted to tell you a story (I hope you will find it quite funny) of a banking project which I was developing for several years. From idea, early prototype through rise of the first implementation, pains of maintenance (spring and hibernate included!), general rewrite (no-code? almost no code?) ending with a long and prosper life on a modern tech stack (any ideas of a modern tech stack for a manager? :-D). This lightning talk contains several general conclusions about product/tech which everyone should keep in their hearts during everyday work.


Slides can be found [here](https://docs.google.com/presentation/d/13Dd4D_P8bcptSrRwXtGfgT8utfByutNztxpIp5RwQqk/)

