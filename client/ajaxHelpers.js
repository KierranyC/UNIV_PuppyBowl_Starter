// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2303-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        if(result.error) {
            throw result.error;
        }
        return result.data.players;
    } catch (error) {
        console.error('Error catching players!', error);
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        console.log(playerId);
        const response = await fetch(`${APIURL}/players/${playerId}`);
        
        const result = await response.json();
        console.log(result);
        return result.data;
    } catch (error){
        console.error(error);

    }
};

export const addNewPlayer = async (playerObj) => {
    try {
        console.log('playerObj', playerObj);
        const response = await fetch (`${APIURL}/players/`, 
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                playerObj
            ),
          }
        );
        const result = await response.json();
        console.log(result);
        return result.data;
      } catch (err) {
        console.error(err);
      }
};

export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return;
       } catch (err) {
        console.error(
          `Couldn't remove player #${playerId}`,
          err
        );
       }
};
