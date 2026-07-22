const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://cinco_db_user:REoWuKGp8OrOUBqX@cincoservice.nkpfffi.mongodb.net/?appName=cincoservice';

const ReviewSchema = new mongoose.Schema({
  title: String,
  text: String,
  author: String,
  location: String,
  rating: Number,
  featured: Boolean,
  replyText: String,
  createdAt: String,
  photos: [String]
});

const CINCO_REVIEWS = [
  {
    title: "Master Bathroom Tile — Absolutely Stunning",
    text: "\u201cCinco Services did our master bathroom remodel \u2013 from framing and plumbing to new bathtub and custom shower tile. Flawless work. Showed up on time, cleaned up every day. Highly recommend.\u201d",
    author: "Lisa M.",
    location: "Houston",
    rating: 5,
    featured: true,
    createdAt: "2026-05-10T10:00:00Z",
    photos: []
  },
  {
    title: "Full Home Remodeling Project",
    text: "\u201cThey handled our entire home remodeling project \u2013 including wall removal, interior painting, and beautiful flooring. Professional, fair price, and the quality is stunning.\u201d",
    author: "James R.",
    location: "Katy",
    rating: 5,
    featured: true,
    createdAt: "2026-05-18T14:30:00Z",
    photos: []
  },
  {
    title: "Roof & Exterior Painting — Fast and Honest",
    text: "\u201cThe team replaced our roof and did exterior painting. Fast, honest, and detail-oriented. Will use them again for our kitchen remodel.\u201d",
    author: "Carmen T.",
    location: "Sugar Land",
    rating: 5,
    featured: true,
    replyText: "Thank you Carmen! We're so glad everything came out beautifully. Can't wait to work on your kitchen!",
    createdAt: "2026-05-24T08:15:00Z",
    photos: []
  },
  {
    title: "Custom Shower Tile — Exceeded Expectations",
    text: "\u201cI hired Cinco Services for a custom tile shower installation and I couldn\u2019t be happier. The craftsmanship is impeccable\u2014every grout line is perfect. They finished ahead of schedule and left the site spotless. Highly professional team.\u201d",
    author: "Maria G.",
    location: "Houston",
    rating: 5,
    featured: true,
    createdAt: "2026-06-01T11:00:00Z",
    photos: []
  },
  {
    title: "Hardwood Flooring Installation",
    text: "\u201cWe had Cinco Services install hardwood floors throughout our home. The team was incredibly professional and the results are beautiful. They were careful with our furniture and cleaned up perfectly every day. Very competitive pricing too.\u201d",
    author: "David & Sarah P.",
    location: "The Woodlands",
    rating: 5,
    featured: true,
    replyText: "David and Sarah, thank you so much! It was a pleasure transforming your home with those beautiful floors.",
    createdAt: "2026-06-05T09:00:00Z",
    photos: []
  },
  {
    title: "Kitchen Backsplash — Perfect Finish",
    text: "\u201cCinco Services installed a stunning mosaic backsplash in our kitchen. The attention to detail was remarkable. They matched the pattern perfectly and the result is a showpiece. Friendly, punctual crew. Will definitely use again.\u201d",
    author: "Angela W.",
    location: "Pearland",
    rating: 5,
    featured: true,
    createdAt: "2026-06-10T13:00:00Z",
    photos: []
  },
  {
    title: "Complete Bathroom Renovation",
    text: "\u201cFrom the initial design consultation to the final tile being set, Cinco Services was exceptional. They completely transformed our outdated bathroom into a spa-like retreat. The tile work is gorgeous and everything is perfectly level.\u201d",
    author: "Robert & Linda K.",
    location: "Friendswood",
    rating: 5,
    featured: true,
    replyText: "Thank you Robert and Linda! Creating that spa-like retreat was our favorite part of this project. Enjoy it!",
    createdAt: "2026-06-15T10:30:00Z",
    photos: []
  },
  {
    title: "Outdoor Patio Tile — Gorgeous Results",
    text: "\u201cHad Cinco Services tile our outdoor patio and pool deck area. The porcelain tile they recommended is slip-resistant, beautiful, and looks amazing. The team was knowledgeable and efficient. Great value for the quality delivered.\u201d",
    author: "Michael T.",
    location: "League City",
    rating: 5,
    featured: false,
    createdAt: "2026-06-20T08:00:00Z",
    photos: []
  },
  {
    title: "New Construction Tile Work",
    text: "\u201cWe used Cinco Services for all the tile work in our new construction home\u2014floors, three bathrooms, laundry room, and kitchen. Exceptional quality and they worked seamlessly with our builder. Our home looks like a luxury build because of their work.\u201d",
    author: "Jennifer & Carlos M.",
    location: "Cypress",
    rating: 5,
    featured: true,
    createdAt: "2026-06-25T15:00:00Z",
    photos: []
  },
  {
    title: "Commercial Flooring Project",
    text: "\u201cWe hired Cinco Services to install commercial-grade tile in our office lobby and break rooms. The project was completed over a weekend so we weren\u2019t disrupted. Professional, efficient, and the quality speaks for itself. Our clients compliment the space constantly.\u201d",
    author: "Pinnacle Business Group",
    location: "Houston",
    rating: 5,
    featured: false,
    replyText: "Thank you for trusting us with your commercial space! We're thrilled the weekend timeline worked perfectly for your business.",
    createdAt: "2026-06-30T11:00:00Z",
    photos: []
  }
];

async function reseedReviews() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected!');

    const Review = mongoose.model('Review', ReviewSchema);
    
    console.log('Deleting all existing reviews...');
    const deleteResult = await Review.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} reviews.`);

    console.log('Inserting Cinco Tile reviews...');
    await Review.insertMany(CINCO_REVIEWS);
    console.log(`Inserted ${CINCO_REVIEWS.length} Cinco Tile reviews.`);

    console.log('Done! Reviews have been updated successfully.');
    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

reseedReviews();
