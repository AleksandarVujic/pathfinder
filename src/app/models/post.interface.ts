export interface Post {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: false;
  user: {
    location: string;
  };
}

// {
//   "id": "I5j46lqAo-o",
//   "slug": "a-person-swimming-in-the-ocean-near-a-coral-reef-I5j46lqAo-o",
//   "created_at": "2023-04-28T12:59:36Z",
//   "updated_at": "2023-11-01T15:35:30Z",
//   "promoted_at": null,
//   "width": 8192,
//   "height": 5464,
//   "color": "#0c2640",
//   "blur_hash": "Lm7{k2rSR6bbyZelR5oftQWFRioI",
//   "description": "Home to kaleidoscopic-colored coral reefs and an abundance of diverse marine life | Islands of NEOM- NEOM, Saudi Arabia",
//   "alt_description": "a person swimming in the ocean near a coral reef",
//   "breadcrumbs": [],
//   "urls": {
//       "raw": "https://images.unsplash.com/photo-1682686581663-179efad3cd2f?ixid=M3w1MjEzMjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODkyNDE4M3w&ixlib=rb-4.0.3",
//       "full": "https://images.unsplash.com/photo-1682686581663-179efad3cd2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjEzMjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODkyNDE4M3w&ixlib=rb-4.0.3&q=85",
//       "regular": "https://images.unsplash.com/photo-1682686581663-179efad3cd2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjEzMjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODkyNDE4M3w&ixlib=rb-4.0.3&q=80&w=1080",
//       "small": "https://images.unsplash.com/photo-1682686581663-179efad3cd2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjEzMjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODkyNDE4M3w&ixlib=rb-4.0.3&q=80&w=400",
//       "thumb": "https://images.unsplash.com/photo-1682686581663-179efad3cd2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjEzMjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODkyNDE4M3w&ixlib=rb-4.0.3&q=80&w=200",
//       "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682686581663-179efad3cd2f"
//   },
//   "links": {
//       "self": "https://api.unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-coral-reef-I5j46lqAo-o",
//       "html": "https://unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-coral-reef-I5j46lqAo-o",
//       "download": "https://unsplash.com/photos/I5j46lqAo-o/download?ixid=M3w1MjEzMjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODkyNDE4M3w",
//       "download_location": "https://api.unsplash.com/photos/I5j46lqAo-o/download?ixid=M3w1MjEzMjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODkyNDE4M3w"
//   },
//   "likes": 238,
//   "liked_by_user": false,

// "user": {
//   "id": "mYizSrdJkkU",
//   "updated_at": "2023-11-06T07:30:36Z",
//   "username": "neom",
//   "name": "NEOM",
//   "first_name": "NEOM",
//   "last_name": null,
//   "twitter_username": "neom",
//   "portfolio_url": "http://www.neom.com",
//   "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
//   "location": "NEOM, Saudi Arabia",
//   "links": {
//       "self": "https://api.unsplash.com/users/neom",
//       "html": "https://unsplash.com/@neom",
//       "photos": "https://api.unsplash.com/users/neom/photos",
//       "likes": "https://api.unsplash.com/users/neom/likes",
//       "portfolio": "https://api.unsplash.com/users/neom/portfolio",
//       "following": "https://api.unsplash.com/users/neom/following",
//       "followers": "https://api.unsplash.com/users/neom/followers"
//   },
//   "profile_image": {
//       "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
//       "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
//       "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
//   },
//   "instagram_username": "discoverneom",
//   "total_collections": 7,
//   "total_likes": 0,
//   "total_photos": 202,
//   "accepted_tos": true,
//   "for_hire": false,
//   "social": {
//       "instagram_username": "discoverneom",
//       "portfolio_url": "http://www.neom.com",
//       "twitter_username": "neom",
//       "paypal_email": null
//   }
// }