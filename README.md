# radon
Backend cohort May 2022 - Sep 2022

Assigment : https://docs.google.com/document/d/1J9bLPYBb_wJ3McS5VnHhUgwFwDEg6zzOiGjxHKjjcrI/edit?usp=sharing

QkhPfNwGEtL7HZV9
rahulKumar


const server = http.createServer((req, res) => {
    const { rawHeaders, httpVersion, socket} = req;
    const { remoteAddress } = socket;
  
    console.log(
      JSON.stringify({
        timestamp: Date.now(),
        rawHeaders,
        httpVersion,
        remoteAddress,
      })
    );
  
    res.end();
  });