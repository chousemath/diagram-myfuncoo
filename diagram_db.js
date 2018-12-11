const nomnoml = require('nomnoml');

const Address = `
[ Address
  | Category int(11)
  | Status int(11)
  | Country int(4)
  | Street varchar(45)
  | City varchar(45)
  | Province varchar(45)
  | Zipcode varchar(45)
  | *UserID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;
const Board = `
[ Board
  | Category int(11)
  | Status int(11)
  | Theme varchar(45)
  | Content text
  | *UserID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const BoardImage = `
[ BoardImage
  | ImageURL varchar(250)
  | Status int(10)
  | *BoardID int(10)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const BoardReply = `
[ BoardReply
  | Category int(11)
  | Status int(11)
  | Theme varchar(45)
  | Content text
  | *BoardID int(11)
  | *UserID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const Card = `
[ Card
  | Category int(11)
  | BillingKey varchar(45)
  | Status int(11)
  | LastFour varchar(45)
  | CardBrand int(11)
  | ExpMonth int(11)
  | ExpYear int(11)
  | Name varchar(45)
  | *UserID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const CartItem = `
[ CartItem
  | Status int(11)
  | Count int(11)
  | ShareCode varchar(45)
  | *ProductID int(11)
  | *UserID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const DeliveryGroup = `
[ DeliveryGroup
  | DeliveryNumber varchar(150)
  | DeliveryCompany varchar(150)
  | DeliveryHistory text
  | DeliveryRequest text
  | RecipientName varchar(45)
  | RecipientPhone varchar(45)
  | Review text
  | ShippingStreet varchar(200)
  | ShippingCity varchar(45)
  | ShippingProvince varchar(45)
  | ShippingZipcode varchar(45)
  | CancellationReason text
  | Rating decimal(5,2)
  | DeliveryDate decimal(13,3)
  | FulfillmentDate decimal(13,3)
  | Status int(10)
  | CancellationType int(10)
  | TollPenalty int(10)
  | DeliveryStatus int(10)
  | Category int(10)
  | ShippingInfoDeadline decimal(13,3)
  | TollDiscount int(10)
  | TollPayment int(10)
  | PreviousTollAmount int(10)
  | DeliveryFee decimal(10,2)
  | ShippingCountry int(4)
  | *LotteryID int(10)
  | *PaymentID int(10)
  | *UserID int(10)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const DeliveryItem = `
[ DeliveryItem
  | Quantity int(10)
  | ProductReviewDeadline decimal(13,3)
  | LotteryReviewDeadline decimal(13,3)
  | *ProductID int(10)
  | *DeliveryGroupID int(10)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const DeliveryItemOption = `
[ DeliveryItemOption
  | *DeliveryItemID int(11)
  | *ProductOptionID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const Lottery = `
[ Lottery
  | Status int(11)
  | StartsAt decimal(13,3)
  | EndsAt decimal(13,3)
  | MinToll int(11)
  | MaxToll int(11)
  | MinParticipants int(11)
  | MaxParticipants int(11)
  | Quantity int(10)
  | WinnerCount int(10)
  | TollPrice int(10)
  | ViewCount int(10)
  | ParticipantCount int(10)
  | TollAmount int(10)
  | WinningTickets text
  | *ProductID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const Payment = `
[ Payment
  | Category int(11)
  | Amount decimal(10,2)
  | TollAmount int(11)
  | PaymentMethod int(11)
  | Status int(11)
  | Description text
  | VBankName varchar(45)
  | VBankNumber varchar(45)
  | TransactionKey varchar(255)
  | *CardID int(11)
  | *UserID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const Product = `
[ Product
  | Name varchar(45)
  | Description text
  | Status int(11)
  | Position int(11)
  | Category int(11)
  | DeliveryMethod int(11)
  | MaxDiscount decimal(10,2)
  | SourcingOrigin text
  | Thumbnail text
  | ImageURL text
  | Stock int(11)
  | Merchant varchar(45)
  | Domestic int(11)
  | ProductionPrice decimal(10,2)
  | SellPrice decimal(10,2)
  | FakePrice decimal(10,2)
  | MaxSalePrice decimal(10,2)
  | Color int(10)
  | Width decimal(10,2)
  | Length decimal(10,2)
  | Height decimal(10,2)
  | SourcingCountry int(10)
  | Handling text
  | QualityAssurance text
  | ASContact text
  | TollPrice int(10)
  | ViewCount int(10)
  | CouponLimit int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
]
`;

const ProductOption = `
[ ProductOption
  | Name varchar(45)
  | Description text
  | AddedCost decimal(10,2)
  | Status int(10)
  | *ProductID int(11)
  | ID int(11)
  | CreatedAt decimal(13,3)
  | UpdatedAt decimal(13,3)
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
[Board] -> [BoardImage]
[Board] -> [BoardReply]

[Card] -> [Payment]

[DeliveryGroup] -> [DeliveryItem]

[DeliveryItem] -> [DeliveryItemOption]

[Lottery] -> [DeliveryGroup]

[Payment] -> [DeliveryGroup]

[Product] -> [CartItem]
[Product] -> [DeliveryItem]
[Product] -> [Lottery]
[Product] -> [ProductOption]

[ProductOption] -> [DeliveryItemOption]

[User] -> [Address]
[User] -> [Board]
[User] -> [BoardReply]
[User] -> [Card]
[User] -> [CartItem]
[User] -> [DeliveryGroup]
[User] -> [Payment]
`;


let src = '';

src += Address;
src += Board;
src += BoardImage;
src += BoardReply;
src += Card;
src += CartItem;
src += DeliveryGroup;
src += DeliveryItem;
src += DeliveryItemOption;
src += Lottery;
src += Payment;
src += Product;
src += ProductOption;
src += User;

src += Relationships;

// console.log(src);
console.log(nomnoml.renderSvg(src));
