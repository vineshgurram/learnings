    function newReleaseForFans() {
    return new Promise((resolve, reject) => {
        const newSongRelease = !true;
        if (newSongRelease) {
        resolve(true);
        }else{
            reject("failure");
        }
    });
    }

    const fansList = [
    "vinesh@gmail.com",
    "john@gmail.com",
    "joe@gmail.com",
    "mike@rediffmail.com",
    "xyz@gmail.com",
    ];

    newReleaseForFans().then(() => {
    fansList.forEach((name) => {
        console.log(`Hey subscriber with ${name} email new song has launched`);
    });
    }).catch((error)=>console.log(error));
