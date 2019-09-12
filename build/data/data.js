"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tours = [
    {
        tourId: "1",
        location: "France",
        tour_name: "Paris",
        price: 99,
        img: ["paris.jpg"]
    },
    {
        tourId: "2",
        location: "England",
        tour_name: "London",
        price: 91,
        img: ["london.jpg"]
    },
    {
        tourId: "3",
        location: "Honduras",
        tour_name: "Roatan",
        price: 999,
        img: ["roatan.jpg"]
    }
];
const reviews = [
    {
        reviewId: "1",
        tourId: 1,
        comment: "It was a good place",
        rate: 5
    },
    {
        reviewId: "2",
        tourId: 1,
        comment: "It was a bad place",
        rate: 2
    },
    {
        reviewId: "3",
        tourId: 1,
        comment: "It was a good place",
        rate: 4
    },
    {
        reviewId: "4",
        tourId: 2,
        comment: "It was a good place",
        rate: 4
    },
    {
        reviewId: "5",
        tourId: 2,
        comment: "It was a bad place",
        rate: 1
    },
    {
        reviewId: "6",
        tourId: 2,
        comment: "It was a good place",
        rate: 5
    },
    {
        reviewId: "7",
        tourId: 3,
        comment: "It was a nice place",
        rate: 5
    },
    {
        reviewId: "8",
        tourId: 3,
        comment: "It was a the best place",
        rate: 5
    },
    {
        reviewId: "9",
        tourId: 3,
        comment: "It was a good place",
        rate: 4
    }
];
class DataStore {
}
exports.DataStore = DataStore;
DataStore.Tours = tours;
DataStore.Reviews = reviews;
