import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

const intialState = {
  contacts: [
    {
      id: 1,
      name: "Ganesh",
      username: "ganesh",
      email: "ganesh301z@gmail.com",
      address: {
        street: "Ram street",
        suite: "Gandhi Nagar",
        city: "Trichy",
        zipcode: "92345-23552",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "9604158634",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Kumaravel",
      username: "Kumar",
      email: "Kumaravel762@gmail.com",
      address: {
        street: "Mani street",
        suite: "Anna Nagar",
        city: "Chennai",
        zipcode: "15366-84432",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "8245673213",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Sulya  Bhoi",
      username: "sulya",
      email: "sulyabhoi49@gmail.com",
      address: {
        street: "	131, D Kherani Rd, Saki ",
        suite: "Suite 847",
        city: "Mumbai",
        zipcode: "	400072",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "02228525249",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "	Saniya  Gogoi",
      username: "saniya",
      email: "saniyaGogoi621@gmail.com",
      address: {
        street: "	77, Chandra Lok Building,",
        suite: "Janpath",
        city: "	Delhi",
        zipcode: "110001",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "	01123310058",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chandi  Dutt",
      username: "Chandi",
      email: "chandi452@gmail.com",
      address: {
        street: "168 Maker Chamber, Vi,",
        suite: "Yogakshema",
        city: "Mumbai",
        zipcode: "400021",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "2549541289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "	Vrishni  Sanghvi",
      username: "vrishni",
      email: "vrishni@gmail.com",
      address: {
        street: "Shop No D 2, Nehru Nagar, S G Barve Road",
        suite: "Kurla",
        city: "Mumbai",
        zipcode: "	400024",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "	02225234150",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Shiva  Zachariah",
      username: "shiva",
      email: "shivazack432@gmail.com",
      address: {
        street: "54th Floor, Block 5, Jaihind Building, Dr Atmaram Merchant Road",
        suite: "Suite Bhuleshwar",
        city: "Mumbai",
        zipcode: "400002",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "	02222080380",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "	Nitara  Walia",
      username: "Nitara",
      email: "nitara621@gmail.com",
      address: {
        street: "	55, Central Market, Saket",
        suite: "Nehru suite",
        city: "	Delhi",
        zipcode: "	110017",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "	01126858643",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Riddhi  Maskar",
      username: "Riddhi",
      email: "Riddhi41@gmail.com",
      address: {
        street: "26th Floor, 260, Steel Yard House, 67-f Sant Tukaram Road, Near Masjid",
        suite: "Bunder Railway Station",
        city: "	Mumbai",
        zipcode: "	400009",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "	02223482626",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "	Vasin  Mathai",
      username: "Vasin",
      email: "vasin521Mathai@gmail.com",
      address: {
        street: 	"D/2, Dalal Estate, Opp Mumbai Central Station",
        suite: "Dalal east",
        city: "Mumbai",
        zipcode: "400008",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "	02223054451",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ],
  contact: null,
  selectedContacts: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };

    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    default:
      return state;
  }
};
