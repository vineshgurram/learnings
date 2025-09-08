// Create a function secretHolder(secret) that stores a secret.
// It should return two functions:

// Expected Result 
// getSecret() → returns the secret
// setSecret(newSecret) → changes the secret
// const holder = secretHolder("initial");
// console.log(holder.getSecret()); // "initial"
// holder.setSecret("updated");
// console.log(holder.getSecret()); // "updated"


function secretHolder(secret){
    return {
        getSecret : function(){
            return secret;
        },
        setSecret: function(newSecret){
            secret = newSecret;
        }
    }
}

const holder = secretHolder("initial");
console.log(holder.getSecret());

holder.setSecret("updated");
console.log(holder.getSecret());