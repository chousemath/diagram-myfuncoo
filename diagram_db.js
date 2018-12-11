const nomnoml = require('nomnoml');

const src = `
[Address | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | Street::varchar(45) | City::varchar(45) | Province::varchar(45) | Zipcode::varchar(45) | Category::int(11) | Status::int(11) | Country::int(4) | CreatedAt::decimal(13,3)]
[Board | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | Category::int(11) | Status::int(11) | Theme::varchar(45) | Content::text| CreatedAt::decimal(13,3)]
[BoardImage | ID::int(10) | BoardID::int(10) | Status::int(10) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3)]
[BoardReply | ID::int(11) | UpdatedAt::decimal(13,3) | BoardID::int(11) | UserID::int(11) | Category::int(11) | Status::int(11) | Theme::varchar(45) | Content::text | CreatedAt::decimal(13,3)]
[Card | ID::int(11) | Category::int(11) | BillingKey::varchar(45) | Status::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | LastFour::varchar(45) | CardBrand::int(11) | ExpMonth::int(11) | ExpYear::int(11) | Name::varchar(45)]
[CartItem | ID::int(11) | ProductID::int(11) | Status::int(11) | Count::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | ShareCode::varchar(45)]
[Category | ID::int(11) | Status::int(11) | ImageURL::text | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3)]
[CategoryProduct | ID::int(11) | UpdatedAt::decimal(13,3) | CategoryID::int(11) | ProductID::int(11) | CreatedAt::decimal(13,3)]
[Coupon | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | CouponCategoryID::int(11) | Status::int(11) | StartsAt::decimal(13,3) |EndsAt::decimal(13,3) | Quantity::int(11) | PaymentID::int(11) | CreatedAt::decimal(13,3)]
[CouponCategory | ID::int(11) | TollValue::int(11) | DiscountValue::float | ImageURL::text | Name::varchar(45) | Description::text | Duration::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | Price::decimal(10,2) | Status::int(11) | Quantity::int(11) | BonusQuantity::int(11)]
[CouponCategoryReward | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | CouponCategoryID::int(11) | PurchasePrice::decimal(10,2) | Status::int(10) | EndsAt::decimal(13,3) | CreatedAt::decimal(13,3)]
[DeliveryGroup | ID::int(10) | UpdatedAt::decimal(13,3) | DeliveryNumber::varchar(150) | DeliveryCompany::varchar(150) | DeliveryHistory::text | DeliveryRequest::text | RecipientName::varchar(45) | RecipientPhone::varchar(45) | Review::text | ShippingStreet::varchar(200) | ShippingCity::varchar(45) | ShippingProvince::varchar(45) | ShippingZipcode::varchar(45) | CancellationReason::text | Rating::decimal(5,2) | UserID::int(10) | PaymentID::int(10) | DeliveryDate::decimal(13,3) | FulfillmentDate::decimal(13,3) | Status::int(10) | CancellationType::int(10) | TollPenalty::int(10) | DeliveryStatus::int(10) | Category::int(10) | LotteryID::int(10) | ShippingInfoDeadline::decimal(13,3) | TollDiscount::int(10) | TollPayment::int(10) | PreviousTollAmount::int(10) | DeliveryFee::decimal(10,2) | ShippingCountry::int(4) | CreatedAt::decimal(13,3)]
[DeliveryItem | ID::int(10) | UpdatedAt::decimal(13,3) | ProductID::int(10) | DeliveryGroupID::int(10) | Quantity::int(10) | ProductReviewDeadline::decimal(13,3) | LotteryReviewDeadline::decimal(13,3) | CreatedAt::decimal(13,3)]
[DeliveryItemOption | ID::int(11) | ProductOptionID::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3)]
[FiatExchangeRate | ID::int(11) | UpdatedAt::decimal(13,3) | KRW::float | USD::float | Category::int(11) | CreatedAt::decimal(13,3)]
[LineItem | ID::int(10) | MerchantID::varchar(250) | ProductID::int(10) | CouponID::int(10) | Title::varchar(250) | Amount::decimal(10,2) | TollAmount::int(10) | DiscountAmount::decimal(10,2) | DiscountTollAmount::int(10) | Quantity::int(10) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | DeliveryItemID::int(10)]
[Lottery | ID::int(11) | UpdatedAt::decimal(13,3) | ProductID::int(11) | Status::int(11) | StartsAt::decimal(13,3) | EndsAt::decimal(13,3) |MinToll::int(11) | MaxToll::int(11) | MinParticipants::int(11) | MaxParticipants::int(11) | Quantity::int(10) | WinnerCount::int(10) | TollPrice::int(10) | ViewCount::int(10) | ParticipantCount::int(10) | TollAmount::int(10) | WinningTickets::text | CreatedAt::decimal(13,3)]
[LotteryUser | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | LotteryID::int(11) | Status::int(11) | TollAmount::int(11) | RewardEndsAt::decimal(13,3) | WinningTickets::varchar(500) | CreatedAt::decimal(13,3)]
[MassCoupon | ID::int(11) | UpdatedAt::decimal(13,3) | ProductID::int(11) | Status::int(11) | StartsAt::decimal(13,3) | EndsAt::decimal(13,3) | Value::int(11) | CreatedAt::decimal(13,3)]
[Payment | ID::int(11) | UpdatedAt::decimal(13,3) | CardID::int(11) | Category::int(11) | Amount::decimal(10,2) | TollAmount::int(11) | PaymentMethod::int(11) | Status::int(11) | Description::text | VBankName::varchar(45) | VBankNumber::varchar(45) | TransactionKey::varchar(255) |UserID::int(11) | CreatedAt::decimal(13,3)]
[Product | ID::int(11) | Description::text | Status::int(11) | Position::int(11) | Category::int(11) | DeliveryMethod::int(11) | MaxDiscount::decimal(10,2) | SourcingOrigin::text | Thumbnail::text | ImageURL::text | Stock::int(11) | Merchant::varchar(45) | Domestic::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | ProductionPrice::decimal(10,2) | SellPrice::decimal(10,2) | FakePrice::decimal(10,2) | MaxSalePrice::decimal(10,2) | Color::int(10) | Width::decimal(10,2) | Length::decimal(10,2) | Height::decimal(10,2) | SourcingCountry::int(10) | Handling::text | QualityAssurance::text | ASContact::text | TollPrice::int(10) | ViewCount::int(10) | CouponLimit::int(11)]
[ProductImage | ID::int(11) | UpdatedAt::decimal(15,3) | ProductID::int(11) | Status::int(11) | ImageURL::text | CreatedAt::decimal(13,3)]
[ProductOption | ID::int(11) | Name::varchar(45) | Description::text | AddedCost::decimal(10,2) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | Status::int(10)]
[ProductPolicy | ID::int(11) | UpdatedAt::decimal(13,3) | ProductID::int(11) | Category::int(11) | Content::text | CreatedAt::decimal(13,3)]
[ProductQuestion | ID::int(10) | UpdatedAt::decimal(13,3) | Question::text | Answer::text | ProductID::int(10) | CreatedAt::decimal(13,3)]
[ProductReward | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | ProductID::int(11) | PurchasePrice::decimal(10,2) | Status::int(10) | EndsAt::decimal(13,3) | CreatedAt::decimal(13,3)]
[Review | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | ProductID::int(11) | LotteryID::int(11) | Category::int(11) | Status::int(11) | Theme::text | Content::text | Rating::int(11) | CreatedAt::decimal(13,3)]
[ReviewImage | ID::int(11) | UpdatedAt::decimal(13,3) | ReviewID::int(11) | ImageURL::text | Status::int(11) | CreatedAt::decimal(13,3)]
[ReviewReply | ID::int(11) | UpdatedAt::decimal(13,3) | ReviewID::int(11) | UserID::int(11) | Category::int(11) | Status::int(11) | Theme::varchar(45) | Content::text | CreatedAt::decimal(13,3)]
[Session | ID::int(11) | UpdatedAt::decimal(13,3) | Name::varchar(45) | Nickname::varchar(45) | Email::varchar(45) | Password::varchar(45) |Phone::varchar(45) | Status::int(11) | HashAccount::varchar(45) | TollBalance::int(11) | AuthID::varchar(45) | Token::text | CreatedAt::decimal(13,3)]
[ShareCodeHistory | ID::int(10) | UpdatedAt::decimal(13,3) | GiverID::int(10) | ReceiverID::int(10) | Category::int(11) | RowID::int(10) | Platform::int(10) | PaymentID::int(10) | CreatedAt::decimal(13,3)]
[Ticket | ID::int(10) | UpdatedAt::decimal(13,3) | LotteryID::int(10) | UserID::int(10) | LotteryUserID::int(10) | TicketNumber::int(10) | Status::int(10) | CreatedAt::decimal(13,3)]
[TollExchangeRate | ID::int(11) | UpdatedAt::decimal(13,3) | Toll::decimal(10,2) | USD::decimal(10,2) | Category::int(11) | CreatedAt::decimal(13,3)]
[User | ID::int(11) | Name::varchar(45) | Nickname::varchar(45) | Email::varchar(45) | Password::varchar(45) | Phone::varchar(45) | Status::int(11) | HashAccount::varchar(45) | TollBalance::int(11) | Flag::varchar(45) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | Profile::varchar(1000) | OneSignalUserID::varchar(300) | ShareCode::varchar(45) | ShareReward::decimal(5,2) | UnreadEventsLotteryParticipation::int(10) | FirstCouponDeadline::decimal(13,3) | UnreadEventsShopping::int(10) | UnreadEventsCoupon::int(10) | UnreadEventsSharing::int(10) | StripeCustomerKey::varchar(45) | SignInCount::int(10) | EntryPlatform::int(10) | PhoneConfirmed::tinyint(1)]
[UserGroup | ID::int(10) | UpdatedAt::decimal(13,3) | MinCreatedAt::decimal(13,3) | MaxCreatedAt::decimal(13,3) | MinActiveCoupons::int(10) | MaxActiveCoupons::int(10) | MinCouponPurchases::int(10) | MaxCouponPurchases::int(10) | MinTollBalance::int(10) | MaxTollBalance::int(10) |MinLotteryParticipation::int(10) | MaxLotteryParticipation::int(10) | MinLotteryWins::int(10) | MaxLotteryWins::int(10) | MinShareCodePurchases::int(10) | MaxShareCodePurchases::int(10) | MinSigninCount::int(10) | MaxSigninCount::int(10) | EntryPlatform::int(10)]
[User] -> [Address]
[User] -> [Board]
[Board] -> [BoardImage]
[Board] -> [BoardReply]
[User] -> [BoardReply]
[Product] -> [CartItem]
[Category] -> [CategoryProduct]
[Product] -> [CategoryProduct]
[User] -> [Coupon]
[CouponCategory] -> [Coupon]
[Payment] -> [Coupon]
[User] -> [CouponCategoryReward]
[CouponCategory] -> [CouponCategoryReward]
[User] -> [DeliveryGroup]
[Payment] -> [DeliveryGroup]
[Lottery] -> [DeliveryGroup]
[Product] -> [DeliveryItem]
[DeliveryGroup] -> [DeliveryItem]
[ProductOption] -> [DeliveryItemOption]
[Product] -> [LineItem]
[Coupon] -> [LineItem]
[DeliveryItem] -> [LineItem]
[Product] -> [Lottery]
[User] -> [LotteryUser]
[Lottery] -> [LotteryUser]
[Product] -> [MassCoupon]
[Card] -> [Payment]
[User] -> [Payment]
[Product] -> [ProductImage]
[Product] -> [ProductPolicy]
[Product] -> [ProductQuestion]
[User] -> [ProductReward]
[Product] -> [ProductReward]
[User] -> [Review]
[Product] -> [Review]
[Lottery] -> [Review]
[Review] -> [ReviewImage]
[Review] -> [ReviewReply]
[User] -> [ReviewReply]
[Payment] -> [ShareCodeHistory]
[Lottery] -> [Ticket]
[User] -> [Ticket]
[LotteryUser] -> [Ticket]
You have new mail in /var/mail/jo
Josephs-MacBook-Pro-2:myfuncoo jo$ ./render
Generating the database diagram svg...
Generating the database diagram png...
[master cb17ac2] Quick save...
 3 files changed, 908 insertions(+), 800 deletions(-)
 rewrite diagram_db.png (80%)
 rewrite diagram_db.svg (81%)
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 4 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1.46 MiB | 743.00 KiB/s, done.
Total 5 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/chousemath/diagram-myfuncoo.git
   bdb23fb..cb17ac2  master -> master
[master e0aacf3] Quick save...
 2 files changed, 902 insertions(+), 800 deletions(-)
 rewrite diagram_db.png (80%)
 rewrite diagram_db.svg (81%)
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 1.46 MiB | 11.50 MiB/s, done.
Total 4 (delta 2), reused 0 (delta 0)
To gitlab.com:jochoi0707/myfuncoo.git
   0baec1b..e0aacf3  master -> master
Josephs-MacBook-Pro-2:myfuncoo jo$ node parse_table.js
[Address | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | Street::varchar(45) | City::varchar(45) | Province::varchar(45) | Zipcode::varchar(45) | Category::int(11) | Status::int(11) | Country::int(4) | CreatedAt::decimal(13,3)]
[Board | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | Category::int(11) | Status::int(11) | Theme::varchar(45) | Content::text| CreatedAt::decimal(13,3)]
[BoardImage | ID::int(10) | BoardID::int(10) | Status::int(10) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3)]
[BoardReply | ID::int(11) | UpdatedAt::decimal(13,3) | BoardID::int(11) | UserID::int(11) | Category::int(11) | Status::int(11) | Theme::varchar(45) | Content::text | CreatedAt::decimal(13,3)]
[Card | ID::int(11) | Category::int(11) | BillingKey::varchar(45) | Status::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | LastFour::varchar(45) | CardBrand::int(11) | ExpMonth::int(11) | ExpYear::int(11) | Name::varchar(45)]
[CartItem | ID::int(11) | ProductID::int(11) | Status::int(11) | Count::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | ShareCode::varchar(45)]
[Category | ID::int(11) | Status::int(11) | ImageURL::text | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3)]
[CategoryProduct | ID::int(11) | UpdatedAt::decimal(13,3) | CategoryID::int(11) | ProductID::int(11) | CreatedAt::decimal(13,3)]
[Coupon | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | CouponCategoryID::int(11) | Status::int(11) | StartsAt::decimal(13,3) |EndsAt::decimal(13,3) | Quantity::int(11) | PaymentID::int(11) | CreatedAt::decimal(13,3)]
[CouponCategory | ID::int(11) | TollValue::int(11) | DiscountValue::float | ImageURL::text | Name::varchar(45) | Description::text | Duration::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | Price::decimal(10,2) | Status::int(11) | Quantity::int(11) | BonusQuantity::int(11)]
[CouponCategoryReward | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | CouponCategoryID::int(11) | PurchasePrice::decimal(10,2) | Status::int(10) | EndsAt::decimal(13,3) | CreatedAt::decimal(13,3)]
[DeliveryGroup | ID::int(10) | UpdatedAt::decimal(13,3) | DeliveryNumber::varchar(150) | DeliveryCompany::varchar(150) | DeliveryHistory::text | DeliveryRequest::text | RecipientName::varchar(45) | RecipientPhone::varchar(45) | Review::text | ShippingStreet::varchar(200) | ShippingCity::varchar(45) | ShippingProvince::varchar(45) | ShippingZipcode::varchar(45) | CancellationReason::text | Rating::decimal(5,2) | UserID::int(10) | PaymentID::int(10) | DeliveryDate::decimal(13,3) | FulfillmentDate::decimal(13,3) | Status::int(10) | CancellationType::int(10) | TollPenalty::int(10) | DeliveryStatus::int(10) | Category::int(10) | LotteryID::int(10) | ShippingInfoDeadline::decimal(13,3) | TollDiscount::int(10) | TollPayment::int(10) | PreviousTollAmount::int(10) | DeliveryFee::decimal(10,2) | ShippingCountry::int(4) | CreatedAt::decimal(13,3)]
[DeliveryItem | ID::int(10) | UpdatedAt::decimal(13,3) | ProductID::int(10) | DeliveryGroupID::int(10) | Quantity::int(10) | ProductReviewDeadline::decimal(13,3) | LotteryReviewDeadline::decimal(13,3) | CreatedAt::decimal(13,3)]
[DeliveryItemOption | ID::int(11) | ProductOptionID::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3)]
[FiatExchangeRate | ID::int(11) | UpdatedAt::decimal(13,3) | KRW::float | USD::float | Category::int(11) | CreatedAt::decimal(13,3)]
[LineItem | ID::int(10) | MerchantID::varchar(250) | ProductID::int(10) | CouponID::int(10) | Title::varchar(250) | Amount::decimal(10,2) | TollAmount::int(10) | DiscountAmount::decimal(10,2) | DiscountTollAmount::int(10) | Quantity::int(10) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | DeliveryItemID::int(10)]
[Lottery | ID::int(11) | UpdatedAt::decimal(13,3) | ProductID::int(11) | Status::int(11) | StartsAt::decimal(13,3) | EndsAt::decimal(13,3) |MinToll::int(11) | MaxToll::int(11) | MinParticipants::int(11) | MaxParticipants::int(11) | Quantity::int(10) | WinnerCount::int(10) | TollPrice::int(10) | ViewCount::int(10) | ParticipantCount::int(10) | TollAmount::int(10) | WinningTickets::text | CreatedAt::decimal(13,3)]
[LotteryUser | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | LotteryID::int(11) | Status::int(11) | TollAmount::int(11) | RewardEndsAt::decimal(13,3) | WinningTickets::varchar(500) | CreatedAt::decimal(13,3)]
[MassCoupon | ID::int(11) | UpdatedAt::decimal(13,3) | ProductID::int(11) | Status::int(11) | StartsAt::decimal(13,3) | EndsAt::decimal(13,3) | Value::int(11) | CreatedAt::decimal(13,3)]
[Payment | ID::int(11) | UpdatedAt::decimal(13,3) | CardID::int(11) | Category::int(11) | Amount::decimal(10,2) | TollAmount::int(11) | PaymentMethod::int(11) | Status::int(11) | Description::text | VBankName::varchar(45) | VBankNumber::varchar(45) | TransactionKey::varchar(255) |UserID::int(11) | CreatedAt::decimal(13,3)]
[Product | ID::int(11) | Description::text | Status::int(11) | Position::int(11) | Category::int(11) | DeliveryMethod::int(11) | MaxDiscount::decimal(10,2) | SourcingOrigin::text | Thumbnail::text | ImageURL::text | Stock::int(11) | Merchant::varchar(45) | Domestic::int(11) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | ProductionPrice::decimal(10,2) | SellPrice::decimal(10,2) | FakePrice::decimal(10,2) | MaxSalePrice::decimal(10,2) | Color::int(10) | Width::decimal(10,2) | Length::decimal(10,2) | Height::decimal(10,2) | SourcingCountry::int(10) | Handling::text | QualityAssurance::text | ASContact::text | TollPrice::int(10) | ViewCount::int(10) | CouponLimit::int(11) | AuthenticationNumber::varchar(45) | VoltageRating::varchar(45) | PowerConsumption::varchar(45) | AuthenticationType::int(10) | ReleaseDate::decimal(13,3)]
[ProductImage | ID::int(11) | UpdatedAt::decimal(15,3) | ProductID::int(11) | Status::int(11) | ImageURL::text | CreatedAt::decimal(13,3)]
[ProductOption | ID::int(11) | Name::varchar(45) | Description::text | AddedCost::decimal(10,2) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | Status::int(10)]
[ProductPolicy | ID::int(11) | UpdatedAt::decimal(13,3) | ProductID::int(11) | Category::int(11) | Content::text | CreatedAt::decimal(13,3)]
[ProductQuestion | ID::int(10) | UpdatedAt::decimal(13,3) | Question::text | Answer::text | ProductID::int(10) | CreatedAt::decimal(13,3)]
[ProductReward | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | ProductID::int(11) | PurchasePrice::decimal(10,2) | Status::int(10) | EndsAt::decimal(13,3) | CreatedAt::decimal(13,3)]
[Review | ID::int(11) | UpdatedAt::decimal(13,3) | UserID::int(11) | ProductID::int(11) | LotteryID::int(11) | Category::int(11) | Status::int(11) | Theme::text | Content::text | Rating::int(11) | CreatedAt::decimal(13,3)]
[ReviewImage | ID::int(11) | UpdatedAt::decimal(13,3) | ReviewID::int(11) | ImageURL::text | Status::int(11) | CreatedAt::decimal(13,3)]
[ReviewReply | ID::int(11) | UpdatedAt::decimal(13,3) | ReviewID::int(11) | UserID::int(11) | Category::int(11) | Status::int(11) | Theme::varchar(45) | Content::text | CreatedAt::decimal(13,3)]
[Session | ID::int(11) | UpdatedAt::decimal(13,3) | Name::varchar(45) | Nickname::varchar(45) | Email::varchar(45) | Password::varchar(45) |Phone::varchar(45) | Status::int(11) | HashAccount::varchar(45) | TollBalance::int(11) | AuthID::varchar(45) | Token::text | CreatedAt::decimal(13,3)]
[ShareCodeHistory | ID::int(10) | UpdatedAt::decimal(13,3) | GiverID::int(10) | ReceiverID::int(10) | Category::int(11) | RowID::int(10) | Platform::int(10) | PaymentID::int(10) | CreatedAt::decimal(13,3)]
[Ticket | ID::int(10) | UpdatedAt::decimal(13,3) | LotteryID::int(10) | UserID::int(10) | LotteryUserID::int(10) | TicketNumber::int(10) | Status::int(10) | CreatedAt::decimal(13,3)]
[TollExchangeRate | ID::int(11) | UpdatedAt::decimal(13,3) | Toll::decimal(10,2) | USD::decimal(10,2) | Category::int(11) | CreatedAt::decimal(13,3)]
[User | ID::int(11) | Name::varchar(45) | Nickname::varchar(45) | Email::varchar(45) | Password::varchar(45) | Phone::varchar(45) | Status::int(11) | HashAccount::varchar(45) | TollBalance::int(11) | Flag::varchar(45) | CreatedAt::decimal(13,3) | UpdatedAt::decimal(13,3) | Profile::varchar(1000) | OneSignalUserID::varchar(300) | ShareCode::varchar(45) | ShareReward::decimal(5,2) | UnreadEventsLotteryParticipation::int(10) | FirstCouponDeadline::decimal(13,3) | UnreadEventsShopping::int(10) | UnreadEventsCoupon::int(10) | UnreadEventsSharing::int(10) | StripeCustomerKey::varchar(45) | SignInCount::int(10) | EntryPlatform::int(10) | PhoneConfirmed::tinyint(1)]
[UserGroup | ID::int(10) | UpdatedAt::decimal(13,3) | MinCreatedAt::decimal(13,3) | MaxCreatedAt::decimal(13,3) | MinActiveCoupons::int(10) | MaxActiveCoupons::int(10) | MinCouponPurchases::int(10) | MaxCouponPurchases::int(10) | MinTollBalance::int(10) | MaxTollBalance::int(10) |MinLotteryParticipation::int(10) | MaxLotteryParticipation::int(10) | MinLotteryWins::int(10) | MaxLotteryWins::int(10) | MinShareCodePurchases::int(10) | MaxShareCodePurchases::int(10) | MinSigninCount::int(10) | MaxSigninCount::int(10) | EntryPlatform::int(10)]
[User] -> [Address]
[User] -> [Board]
[Board] -> [BoardImage]
[Board] -> [BoardReply]
[User] -> [BoardReply]
[Product] -> [CartItem]
[Category] -> [CategoryProduct]
[Product] -> [CategoryProduct]
[User] -> [Coupon]
[CouponCategory] -> [Coupon]
[Payment] -> [Coupon]
[User] -> [CouponCategoryReward]
[CouponCategory] -> [CouponCategoryReward]
[User] -> [DeliveryGroup]
[Payment] -> [DeliveryGroup]
[Lottery] -> [DeliveryGroup]
[Product] -> [DeliveryItem]
[DeliveryGroup] -> [DeliveryItem]
[ProductOption] -> [DeliveryItemOption]
[Product] -> [LineItem]
[Coupon] -> [LineItem]
[DeliveryItem] -> [LineItem]
[Product] -> [Lottery]
[User] -> [LotteryUser]
[Lottery] -> [LotteryUser]
[Product] -> [MassCoupon]
[Card] -> [Payment]
[User] -> [Payment]
[Product] -> [ProductImage]
[Product] -> [ProductPolicy]
[Product] -> [ProductQuestion]
[User] -> [ProductReward]
[Product] -> [ProductReward]
[User] -> [Review]
[Product] -> [Review]
[Lottery] -> [Review]
[Review] -> [ReviewImage]
[Review] -> [ReviewReply]
[User] -> [ReviewReply]
[Payment] -> [ShareCodeHistory]
[Lottery] -> [Ticket]
[User] -> [Ticket]
[LotteryUser] -> [Ticket]
`;

// console.log(src);
console.log(nomnoml.renderSvg(src));
