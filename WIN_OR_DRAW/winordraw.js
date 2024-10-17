// HOME---DRAW---AWAY---(1 X 2)
let home1 = prompt("HOME TO WIN FULL TIME ODD");
let homeAwayX = prompt("FULL TIME DRAW ODD");
let away2 = prompt("AWAY TO WIN FULL TIME ODD");

// DOUBLE CHANCE
let homeOrDraw1X = prompt("HOME WIN OR DRAW ODD");
let awayOrDraw2X = prompt("AWAY WIN OR DRAW ODD");

// BOTH TEAM COMBINED GOALS
let bothTeamGoals = prompt("BOTH TEAM POSSIBLE COMBINED GOALS");

// HOME TEAM TOTAL GOALS
let homeTeamGoals = prompt("HOME TEAM POSSIBLE TOTAL GOALS");

// AWAY TEAM TOTAL GOALS
let awayTeamGoals = prompt("AWAY TEAM POSSIBLE TOTAL GOALS");

// H2H MEETINGS
let h2hMeetings = prompt("NUMBER OF H2H MEETINGS");
let homeTeamWins = prompt("HOME TEAM TOTAL WINS ON H2H");
let homeTeamDraws = prompt("HOME TEAM TOTAL DRAWS ON H2H");
let homeTeamLoss = prompt("HOME TEAM TOTAL LOSS ON H2H");
let awayTeamWins = prompt("AWAY TEAM TOTAL WINS ON H2H");
let awayTeamDraws = prompt("AWAY TEAM TOTAL DRAWS ON H2H");
let awayTeamLoss = prompt("AWAY TEAM TOTAL LOSS ON H2H");
let homeWins = prompt("HOME TEAM TOTAL WINS AT HOME ON H2H");
let homeDraws = prompt("HOME TEAM TOTAL DRAWS AT HOME ON H2H");
let homeLoss = prompt("HOME TEAM TOTAL LOSS AT HOME ON H2H");
let awayWins = prompt("AWAY TEAM TOTAL WINS AWAY ON H2H");
let awayDraws = prompt("AWAY TEAM TOTAL DRAWS AWAY ON H2H");
let awayLoss = prompt("AWAY TEAM TOTAL LOSS AWAY ON H2H");
let homeWinsAway = prompt("HOME TEAM TOTAL WINS FROM AWAY");
let homeDrawsAway = prompt("HOME TEAM TOTAL DRAWS FROM AWAY");
let homeLossAway = prompt("HOME TEAM TOTAL LOSS FROM AWAY");
let awayWinsHome = prompt("AWAY TEAM TOTAL WINS AT HOME");
let awayDrawsHome = prompt("AWAY TEAM TOTAL DRAWS AT HOME");
let awayLossHome = prompt("AWAY TEAM TOTAL LOSS AT HOME");

// HOME TEAM H2H NEW
let homeH2HNewWins = prompt("HOME TEAM TOTAL WIN ON H2H NEW");
let homeH2HNewDraws = prompt("HOME TEAM TOTAL DRAWS ON H2H NEW");
let homeH2HNewLoss = prompt("HOME TEAM TOTAL LOSS ON H2H NEW");
let homeH2HNewWinsHome = prompt("HOME TEAM TOTAL WINS FROM HOME ON H2H NEW");
let homeH2HNewDrawsHome = prompt("HOME TEAM TOTAL DRAWS FROM HOME ON H2H NEW");
let homeH2HNewLossHome = prompt("HOME TEAM TOTAL LOSS FROM HOME ON H2H NEW");
let homeH2HNewWinsAway = prompt("HOME TEAM TOTAL WINS FROM AWAY ON H2H NEW");
let homeH2HNewDrawsAway = prompt("HOME TEAM TOTAL DRAWS FROM AWAY ON H2H NEW");
let homeH2HNewLossAway = prompt("HOME TEAM TOTAL LOSS FROM AWAY ON H2H NEW");

// AWAY TEAM H2H NEW
let awayH2HNewWins = prompt("AWAY TEAM TOTAL WIN ON H2H NEW");
let awayH2HNewDraws = prompt("AWAY TEAM TOTAL DRAWS ON H2H NEW");
let awayH2HNewLoss = prompt("AWAY TEAM TOTAL LOSS ON H2H NEW");
let awayH2HNewWinsHome = prompt("AWAY TEAM TOTAL WINS FROM HOME ON H2H NEW");
let awayH2HNewDrawsHome = prompt("AWAY TEAM TOTAL DRAWS FROM HOME ON H2H NEW");
let awayH2HNewLossHome = prompt("AWAY TEAM TOTAL LOSS FROM HOME ON H2H NEW");
let awayH2HNewWinsAway = prompt("AWAY TEAM TOTAL WINS FROM AWAY ON H2H NEW");
let awayH2HNewDrawsAway = prompt("AWAY TEAM TOTAL DRAWS FROM AWAY ON H2H NEW");
let awayH2HNewLossAway = prompt("AWAY TEAM TOTAL LOSS FROM AWAY ON H2H NEW");

// TEAMS POSITION ON LEAGUE TABLE
let homeTeam = prompt("HOME TEAM POSITION ON LEAGUE TABLE");
let awayTeam = prompt("AWAY TEAM POSITION ON LEAGUE TABLE");

// CONTROL_FLOW FOR HOME TEAM
if (home1 < away2 && homeAwayX >= "3.20" && homeOrDraw1X < awayOrDraw2X &&
bothTeamGoals >= "4" && homeTeamGoals > awayTeamGoals && h2hMeetings <= "5" &&
homeTeamWins >= "0" && homeTeamDraws >= "0" && homeTeamLoss <= "1" && awayTeamWins <= "1"
&& awayTeamDraws <= "2" && awayTeamLoss >= "0" && homeWins >= "0" && homeDraws >= "0"
&& homeLoss === "0" && awayWins === "0" && awayDraws <= "1" && awayLoss >= "0"
&& homeWinsAway >= "0" && homeDrawsAway >= "0" && homeLossAway <= "1" && awayWinsHome <= "1"
&& awayDrawsHome <= "2" && awayLossHome >= "0" && homeH2HNewWins >= "2"
&& homeH2HNewDraws >= "0" && homeH2HNewLoss <= "1" && homeH2HNewWinsHome >= "2"
&& homeH2HNewDrawsHome >= "0" && homeH2HNewLossHome === "0" && homeH2HNewWinsAway >= "1"
&& homeH2HNewDrawsAway >= "0" && homeH2HNewLossAway <= "1" && awayH2HNewWins <= "2"
&& awayH2HNewDraws <= "5" && awayH2HNewLoss <= "5" && awayH2HNewWinsHome <= "3"
&& awayH2HNewDrawsHome <= "5" && awayH2HNewLossHome >= "0" && awayH2HNewWinsAway <= "1"
&& awayH2HNewDrawsAway <= "2" && awayH2HNewLossAway <= "5" && homeTeam >= "17"
|| homeTeam === "0" && awayTeam >= "17" || awayTeam === "0") {
      alert("HOME CAN WIN OR DRAW");
} else {
      alert("HOME TOO RISKY TO WIN OR DRAW");
}

// CONTROL_FLOW FOR AWAY TEAM
if (home1 > away2 && homeAwayX >= "3.20" && homeOrDraw1X > awayOrDraw2X
&& bothTeamGoals >= "4" && homeTeamGoals < awayTeamGoals && h2hMeetings <= "5"
&& homeTeamWins <= "2" && homeTeamDraws <= "3" && homeTeamLoss <= "5"
&& awayTeamWins >= "0" && awayTeamDraws >= "0" && awayTeamLoss <= "1"
&& homeWins === "0" && homeDraws <= "1" && homeLoss >= "0" && awayWins >= "0"
&& awayDraws >= "0" && awayLoss === "0" && homeWinsAway === "0" && homeDrawsAway <= "1"
&& homeLossAway >= "0" && awayWinsHome >= "0" && awayDrawsHome >= "0"
&& awayLossHome === "0" && homeH2HNewWins <= "2" && homeH2HNewDraws <= "3"
&& homeH2HNewLoss <= "5" && homeH2HNewWinsHome < "3" && homeH2HNewDrawsHome < "4"
&& homeH2HNewLossHome >= "0" && homeH2HNewWinsAway <= "2" && homeH2HNewDrawsAway >= "0"
&& homeH2HNewLossAway >= "0" && awayH2HNewWins >= "2" && awayH2HNewDraws >= "0"
&& awayH2HNewLoss <= "2" && awayH2HNewWinsHome >= "2" && awayH2HNewDrawsHome >= "0"
&& awayH2HNewLossHome === "0" && awayH2HNewWinsAway >= "0" && awayH2HNewDrawsAway >= "0"
&& awayH2HNewLossAway <= "1" && homeTeam >= "17" || homeTeam === "0"
&& awayTeam >= "17" || awayTeam === "0") {
      alert("AWAY CAN WIN OR DRAW");
} else {
      alert("AWAY TOO RISKY TO WIN OR DRAW");
}