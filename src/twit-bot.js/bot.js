const config = require('./config');
const twit = require('twit');

const T = new twit(config);

function retweet(searchText)
{
    let params =
    {
        q : searchText + '',
        result_type : 'mixed',
        count : 25,
    }
}

