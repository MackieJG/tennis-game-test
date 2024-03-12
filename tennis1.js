"use strict";

function getScore(m_score1, m_score2) {
  if (m_score1 === m_score2) {
    return getTiedScore(m_score1);
  } else if (m_score1 >= 4 || m_score2 >= 4) {
    var scoreDifference = m_score1 - m_score2;
    console.log(scoreDifference);
    return getAdvantageOrWin(scoreDifference);
  } else {
    var score = "";
    for (var i = 1; i < 3; i++) {
      var tempScore = i === 1 ? m_score1 : m_score2;
      if (i === 2) score += "-";
      score += getInGameScore(tempScore);
    }
    return score;
  }
}

function getTiedScore(score) {
  switch (score) {
    case 0:
      return "Love-All";
    case 1:
      return "Fifteen-All";
    case 2:
      return "Thirty-All";
    default:
      return "Deuce";
  }
}

function getAdvantageOrWin(scoreDifference) {
  if (scoreDifference === 1) {
    return "Advantage player1";
  } else if (scoreDifference === -1) {
    return "Advantage player2";
  } else if (scoreDifference > 1) {
    return "Win for player1";
  } else if (scoreDifference < -1) {
    return "Win for player2";
  } else {
    return "Scores are level";
  }
}

function getInGameScore(score) {
  switch (score) {
    case 0:
      return "Love";
    case 1:
      return "Fifteen";
    case 2:
      return "Thirty";
    case 3:
      return "Forty";
  }
}

module.exports = getScore;
