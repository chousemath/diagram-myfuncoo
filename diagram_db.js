const nomnoml = require('nomnoml');

const Address = `
[ Address
  | Category int(11)
  | Status int(11)
  | Country int(4)
  | UserID int(11)
  | Street varchar(45)
  | City varchar(45)
  | Province varchar(45)
  | Zipcode varchar(45)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;
const Board = `
[ Board
  | UserID int(11)
  | Category int(11)
  | Status int(11)
  | Theme varchar(45)
  | Content text
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const BoardImage = `
[ BoardImage
  | ImageURL varchar(250)
  | BoardID int(10)
  | Status int(10)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const BoardReply = `
[ BoardReply
  | BoardID int(11)
  | UserID int(11)
  | Category int(11)
  | Status int(11)
  | Theme varchar(45)
  | Content text
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const Card = `
[ Card
  | UserID int(11)
  | Category int(11)
  | BillingKey varchar(45)
  | Status int(11)
  | LastFour varchar(45)
  | CardBrand int(11)
  | ExpMonth int(11)
  | ExpYear int(11)
  | Name varchar(45)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const DeliveryItem = `
[ DeliveryItem
  | ProductID int(10)
  | DeliveryGroupID int(10)
  | Quantity int(10)
  | ProductReviewDeadline decimal(13,3)
  | LotteryReviewDeadline decimal(13,3)
]
`;

const DeliveryItemOption = `
[ DeliveryItemOption
  | DeliveryItemID int(11)
  | ProductOptionID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const ProductOption = `
[ ProductOption
  | ProductID int(11)
  | Name varchar(45)
  | Description text
  | AddedCost decimal(10,2)
  | Status int(10)
]
`;

const User = `
[ User
  | AuthID varchar(45)
  | Name varchar(45)
  | Nickname varchar(45)
  | Email varchar(45)
  | Password varchar(45)
  | Phone varchar(45)
  | Status int(11)
  | HashAccount varchar(45)
  | TollBalance int(11)
  | Flag varchar(45)
  | Profile varchar(1000)
  | OneSignalPushToken varchar(300)
  | OneSignalUserID varchar(300)
  | ShareCode varchar(45)
  | ShareReward decimal(5,2)
  | UnreadEventsLotteryParticipation int(10)
  | UnreadEventsLotteryWinner int(10)
  | UnreadEventsLotteryLoser int(10)
  | UnreadEventsReview int(10)
  | UnreadEventsInquiry int(10)
  | TutorialDeadline decimal(13,3)
  | FirstCouponDeadline decimal(13,3)
  | UnreadEventsShopping int(10)
  | UnreadEventsCoupon int(10)
  | UnreadEventsSharing int(10)
  | StripeCustomerKey varchar(45)
  | SignInCount int(10)
  | EntryPlatform int(10)
  | PhoneConfirmed tinyint(1)
  | CustomsCode varchar(45)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const Relationships = `
[Board] p - c [BoardImage]
[Board] p - c [BoardReply]

[DeliveryItem] p - c [DeliveryItemOption]

[ProductOption] p - c [DeliveryItemOption]

[User] p - c [Address]
[User] p - c [Board]
[User] p - c [BoardReply]
[User] p - c [Card]
`;


let src = '';

src += Address;
src += Board;
src += BoardImage;
src += BoardReply;
src += Card;
src += DeliveryItem;
src += DeliveryItemOption;
src += ProductOption;
src += User;

src += Relationships;

// console.log(src);
console.log(nomnoml.renderSvg(src));
