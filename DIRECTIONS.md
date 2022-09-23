# Skills Test

Congratulations and thank you for making it this far in the interview process!

As it should have been described to you, the following is a multi-part skills test designed to reflect real-world Guardians' projects. We appreciate and value your time and we hope this test will not waste it.

## How you will be evaluated

We are evaluating the following competencies: basic algorithmic design, TS capabilities, and knowledge of API design and best practices.

There are three parts to this test, **but not all parts of the test need to be completed in order to advance in the interview process.** We mostly want to see your strengths and weaknesses.

## DIRECTIONS

1. If you haven't already, create a CodeSandbox account.
2. Click on the menu icon in the top left and go to File and click Fork Sandbox --- Or just click the Fork button in the top right.
3. Continue with the directions below.
   When you are done, there is a form link in the initial email you recieved. Fill out the questions, which should include urls to your forked sandbox. Give a brief explanation of how it went and what challenges (if any) you faced. Also let us know roughly how long it took for you to complete the challenge. Speed is not what we are evaluating; we are evaluating the process as a whole and the effort it takes to complete it.

Good luck!

## HELP

If you experience a "502 Bad Gateway" message, try waiting a few seconds and refreshing the example browser window. If this does not work, enter the server control panel on the far left rail below the settings gear and try restarting the server. If this does not work, try refreshing the whole browser window. If you are still having trouble after this, **please reach out and let us know ASAP.**

### Part One: Pitches Endpoint

Implement an endpoint that returns a list of pitches for a given playerId. An array of pitches can be found in the data directory.

### `/pitches`

#### Query Params

`playerId`

- required
- number

#### Description

If a playerId is passed, returns a list of pitches on an object with a pitches property

```js
{
  pitches: [];
}
```

### Part Two: Players Endpoint

Implement an endpoint that returns a list of PlayerBioDTO's when no playerId is passed in, but a PlayerDetailDTO when a playerId is passed in. To do this, you will first need to define the PlayerDetailDTO as described in types/index.ts. Then, you will need to merge player bio and player stats objects found in the data directory in a way such that the new objects are of type PlayerDetailDTO.

### `/players`

#### Query Params

`playerId`

- optional
- number

#### Description

If not query param is passed, returns a list of PlayerBioDTO on an object with a players property

```js
{
  players: [];
}
```

If a playerId is passed, returns a PlayerDetailDTO (found in types directory) on an object with a playerDetails property

```js
{
  playerDetails: {
  }
}
```

### Part Three: Bad input handling

#### Pitches endpoint

- If no query param is passed, returns an error with a message

- If a playerId is passed but there is no player associated with that id, returns an error with a message

### Players endpoint

- If a playerId is passed but there is no player associated with that id, returns an error with a message
