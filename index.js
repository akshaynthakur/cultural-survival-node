const express = require("express");
const SoundCloud = require("soundcloud-scraper");
const { parse } = require("rss-to-json");
var parseString = require("xml2js").parseString;
var http = require("https");

const app = express();

const client = new SoundCloud.Client();
const fs = require("fs");

// rss feed parser

const xmlToJson = (url, callback) => {
  var req = http.get(url, function (res) {
    var xml = "";

    res.on("data", function (chunk) {
      xml += chunk;
    });

    res.on("error", function (e) {
      callback(e, null);
    });

    res.on("timeout", function (e) {
      callback(e, null);
    });

    res.on("end", function () {
      parseString(xml, function (err, result) {
        callback(null, result);
      });
    });
  });
};

<<<<<<< HEAD
=======





>>>>>>> e5bfd397b90fc0df4cef1c7b097625ac85b6aa10
const readJsonPromise = (url) => {
  return new Promise((resolve, reject) => {
    xmlToJson(url, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getJson = () => {
  readJsonPromise("https://rights.culturalsurvival.org/blueprint-xml")
    .then((data) => {
<<<<<<< HEAD
      /* Do something with data */
      var result = JSON.stringify(data);
      console.log(result);
      return result;
      // fs.writeFile("test.json", JSON.stringify(data), "utf8", function (err) {
      //   if (err) {
      //     console.log("An error occured while writing JSON Object to File.");
      //     return console.log(err);
      //   }
      // });
=======
    var newData = data.radio_spots.radio_spot;
    var audioURLArray = []
    var audioURLs = newData.map(item => {
        audioURLArray.push(item.SoundCloud[0])
    })
     console.log("First element:", audioURLArray);
    return audioURLArray;
>>>>>>> e5bfd397b90fc0df4cef1c7b097625ac85b6aa10
    })
    .catch((err) => {
      /* Handle error */
    });
};

<<<<<<< HEAD
const getUrls = () => {
  var json = getJson();
  console.log(json);
=======

const getUrls = () => {
  var json = getJson();
>>>>>>> e5bfd397b90fc0df4cef1c7b097625ac85b6aa10
};

getUrls();
// soundcloud scraper

const getTrack = (url) => {
  client
    .getSongInfo(url)
    .then(async (song) => {
      const stream = await song.downloadProgressive();
      const writer = stream.pipe(
        fs.createWriteStream(`./audio/${song.title}.mp3`)
      );
      writer.on("finish", () => {
        console.log("Finished writing song!");
        process.exit(1);
      });
    })
    .catch(console.error);
};

const getTracks = (urls) => {
  urls.forEach((url) => getTrack(url));
};

// app.get("/", (req, res) => {
//   res.send("First request");
// });

// app.listen(3000, () => {
//   console.log("Listening");
// });
<<<<<<< HEAD
=======









































// var http = require('https');
// var parseString = require('xml2js').parseString;


// var url = 'https://rights.culturalsurvival.org/blueprint-xml'

// function xmlToJson(url, callback) {
//   var req = https.get(url, function(res) {
//     var xml = '';
    
//     res.on('data', function(chunk) {
//       xml += chunk;
//     });

//     res.on('error', function(e) {
//       callback(e, null);
//     }); 

//     res.on('timeout', function(e) {
//       callback(e, null);
//     }); 

//     res.on('end', function() {
//       parseString(xml, function(err, result) {
//         callback(null, result);
//       });
//     });
//   });
// }

// xmlToJson(url, function(err, data) {
//   if (err) {
//     // Handle this however you like
//     return console.err(err);
//   }
 
//   console.log(JSON.stringify(data, null, 2));
// });

// // const express = require("express")
// // const SoundCloud = require("soundcloud-scraper");

// // const app = express()

// // const client = new SoundCloud.Client();
// // const fs = require("fs");

// // client.getSongInfo("https://soundcloud.com/culturalsurvival/dia-de-la-resistencia-indigena")
// //     .then(async song => {
// //         const stream = await song.downloadProgressive();
// //         const writer = stream.pipe(fs.createWriteStream(`./audio/${song.title}.mp3`));
// //         writer.on("finish", () => {
// //           console.log("Finished writing song!")
// //           process.exit(1);
// //         });
// //     })
// //     .catch(console.error);

// // app.get("/", (req, res) => {
// //     res.send("First request");
// // });

// // app.listen(3000, () => {
// //     console.log("Listening");
// // })





// // var parser = require('rss-to-json-feed');

// // parser.parseURL('https://www.reddit.com/.rss', function(err, parsed) {
// //   console.log(parsed.feed.title);
// //   parsed.feed.entries.forEach(function(entry) {
// //     console.log(entry.title + ':' + entry.link);
// //   })
// // })


// // var SC = require('soundcloud');

// // SC.initialize({
// //     client_id: 'ZzQw5OLejAQys1cYAUI2nUbLtZbBe5Lg'
// // });

// // SC.get('/users/3908191/tracks').then(function(tracks){
// //   console.log('Latest track: ' + tracks[0].title);
// // });

// // import Soundcloud from "soundcloud.ts"

// // const SOUNDCLOUD_CLIENT_ID = 'ZzQw5OLejAQys1cYAUI2nUbLtZbBe5Lg'
// // const SOUNDCLOUD_OAUTH_TOKEN = '2-293736-1181409793-sHOoYL42vTDmN'

// // async function useAPI() {
// // var soundcloud = new Soundcloud(process.env.SOUNDCLOUD_CLIENT_ID, process.env.SOUNDCLOUD_OAUTH_TOKEN)
// //     try {
// //     const culturalSurvivalPlaylist = await soundcloud.users.tracks(3908191)
// //     console.log(culturalSurvivalPlaylist)
// //     } catch (err) {
// //         console.log ('error')
// //     }
    
// // }

// // useAPI()
>>>>>>> e5bfd397b90fc0df4cef1c7b097625ac85b6aa10
