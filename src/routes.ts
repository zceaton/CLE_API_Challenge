import Express from "express";
import {
  PitchDTO,
  PlayerBioDTO,
  PlayerStatsDTO,
  PlayerDetailDTO,
  PitchResult,
  PlayerBiosResult,
  PlayerDetailsResult,
} from "./types";
import { pitches } from "./data/pitches";
import { playerBios } from "./data/playerBios";
import { playerStats } from "./data/playerStats";
const router = Express.Router();

router.get("/", (req, res) => {
  const { name = "World" } = req.query;
  return res.send(`Hello ${name}!`);
});

router.get("/pitches", (req, res) => {
  return res.send("Your request did not contain a player ID!");
});

router.get("/pitches/:playerId", (req, res) => {
  const playerId = req.param("playerId");

  let playerIdPitches: Array<PitchDTO> = [];

  for (let pitchIdx = 0; pitchIdx < pitches.length; pitchIdx++) {
    if (pitches[pitchIdx].pitcherId == parseInt(playerId)) {
      playerIdPitches.push(pitches[pitchIdx]);
    }
  }

  if (playerIdPitches.length == 0) {
    return res.send("The player ID that you requested does not exist!");
  }

  let result: PitchResult = { pitches: playerIdPitches };

  return res.send(result);
});

router.get("/players", (req, res) => {
  let result: PlayerBiosResult = { players: playerBios };
  return res.send(result);
});

router.get("/players/:playerId", (req, res) => {
  const playerId = req.param("playerId");
  const playerIdInt = parseInt(playerId);
  let playerIdInBios = false;
  let playerIdInStats = false;
  let playerDetailsObj: PlayerDetailDTO = {};

  for (let bioIdx = 0; bioIdx < playerBios.length; bioIdx++) {
    if (playerBios[bioIdx].playerId == playerIdInt) {
      playerIdInBios = true;
      playerDetailsObj.fullName = playerBios[bioIdx].fullName;
      playerDetailsObj.imgId = playerBios[bioIdx].imgId;
      playerDetailsObj.orgAbbr = playerBios[bioIdx].orgAbbr;
      playerDetailsObj.orgId = playerBios[bioIdx].orgId;
      playerDetailsObj.position = playerBios[bioIdx].position;
      playerDetailsObj.shortName = playerBios[bioIdx].shortName;
      playerDetailsObj.teamAbbr = playerBios[bioIdx].teamAbbr;
      break;
    }
  }

  for (let statsIdx = 0; statsIdx < playerStats.length; statsIdx++) {
    if (playerStats[statsIdx].playerId == playerIdInt) {
      playerIdInStats = true;
      playerDetailsObj.bb = playerStats[statsIdx].bb;
      playerDetailsObj.era = playerStats[statsIdx].era;
      playerDetailsObj.fip = playerStats[statsIdx].fip;
      playerDetailsObj.g = playerStats[statsIdx].g;
      playerDetailsObj.gs = playerStats[statsIdx].gs;
      playerDetailsObj.h = playerStats[statsIdx].h;
      playerDetailsObj.hr = playerStats[statsIdx].hr;
      playerDetailsObj.ip = playerStats[statsIdx].ip;
      playerDetailsObj.k = playerStats[statsIdx].k;
      playerDetailsObj.np = playerStats[statsIdx].np;
      playerDetailsObj.serviceTime = playerStats[statsIdx].serviceTime;
      break;
    }
  }

  if (playerIdInBios && playerIdInStats) {
    let result: PlayerDetailsResult = { playerDetails: playerDetailsObj };
    return res.send(result);
  } else if (!playerIdInBios && playerIdInStats) {
    return res.send(
      "The playerId in your request was not present in the bio data!"
    );
  } else if (playerIdInBios && !playerIdInStats) {
    return res.send(
      "The playerId in your request was not present in the stats data!"
    );
  } else {
    return res.send(
      "The playerId in your request was not present in the bio or stats data!"
    );
  }
});

export { router };
