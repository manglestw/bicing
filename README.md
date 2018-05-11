#Bicing API using React/Redux
It lists all the Bicing stations and shows how many bikes and free slots they have.

Important:
 
Due to Bicing CORS protection, we use a local server to fetch all the info.

To do so, please use
https://github.com/typicode/json-server

And then run:

`json-server src/assets/bicing.json -d 1000 --port 3001`

_Adapt the path to your bicing.json file_

The bicing.json was downloaded 2018/5/11.
A real app should download that file and update it continuously