const nomnoml = require('nomnoml');

const Address = `
[ Address
  | Category: int(11)
  | Status: int(11)
  | Country: int(4)
  | UserID: int(11)
  | Street: varchar(45)
  | City: varchar(45)
  | Province: varchar(45)
  | Zipcode: varchar(45)
  | ID: int(11)
  | CreatedAt: decimal(13,3)
  | UpdatedAt: decimal(13,3)
]
`;
const Board = `
[ Board
  | UserID: int(11)
  | Category: int(11)
  | Status: int(11)
  | Theme: varchar(45)
  | Content: text
  | ID: int(11)
  | CreatedAt: decimal(13,3)
  | UpdatedAt: decimal(13,3)
]
`;

const BoardImage = `
[ BoardImage
  | ImageURL: varchar(250)
  | BoardID: int(10)
  | Status: int(10)
  | ID: int(11)
  | CreatedAt: decimal(13,3)
  | UpdatedAt: decimal(13,3)
]
`;

const BoardReply = `
[ BoardReply
  | BoardID: int(11)
  | UserID: int(11)
  | Category: int(11)
  | Status: int(11)
  | Theme: varchar(45)
  | Content: text
  | ID: int(11)
  | CreatedAt: decimal(13,3)
  | UpdatedAt: decimal(13,3)
]
`;

const Relationships = `
[Board] Parent - Child [BoardImage]
[Board] Parent - Child [BoardReply]
`;


let src = '';

src += Address;
src += Board;
src += BoardImage;
src += BoardReply;

src += Relationships;

// console.log(src);
console.log(nomnoml.renderSvg(src));
