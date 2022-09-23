import Express from "express";
import { PitchDTO, PlayerBioDTO, PlayerStatsDTO, PitchResult } from "./types";
import { pitches } from "./data/pitches";
const router = Express.Router();

router.get("/", (req, res) => {
  const { name = "World" } = req.query;
  return res.send(`Hello ${name}!`);
});

router.get("/pitches/:playerId", (req, res) => {
  const playerId = req.param("playerId");

  if (playerId == undefined) {
    return res.send("Your request did not contain a player ID!");
  }

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
  const { name = "players" } = req.query;
  return res.send(`Hello ${name}!`);
});

export { router };
