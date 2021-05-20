const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();


exports.handler = (event, context, callback) => {
    const Bucket = event.Records[0].s3.bucket.name; // react-nodebird-s3
    const Key = event.Records[0].s3.object.key; // original/123123123_abc.png
    console.log(Bucket, Key);
    const filename = Key.split('/')[Key.split('/').length-1];
    const ext = Key.split('.')[Key.split('.').length-1];
}