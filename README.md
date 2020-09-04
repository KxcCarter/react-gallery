# React Image Gallery

## Description

_Duration: weekend challenge_

An app that displays photos as a gallery list. Visitors to the page can 'like' a photo or delete a photo. Clicking once on a photo will show a description, and clicking a second time will toggle back to the image.

Images can be added to the gallery by inputting an image URL along with a title and description for the photo.

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

1. Create a database named `react_gallery`,
2. Run the queries in the `database.sql` file to create all the necessary tables and populate the needed data to allow the application to run correctly.
   The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal

## Built With

- React.js
- Material-UI
- PostgreSQL

#### TODOs

- When an image is clicked, the entire height of the card changes. Make the card's height static so that no matter the size of the image or the amount of text will change the dimensions of the card.

- Rather than replace the img tag I would like to overlay the text on top of it so that you can still see the image after you click it.

- Implement uppy or AWS S3 for image upload.

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at [kxccarter@gmail.com](www.google.com)
