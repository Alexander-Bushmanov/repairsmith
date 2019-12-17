import * as types from "../constants/types";

const initialState = {
  cart: [],
  searchResults: [],
  allRepairs: [
    {
      id: 1,
      repairName: "Replace Air Mass Flow Sensor",
      repairId: [1],
    },
    {
      id: 2,
      repairName: "Replace Ignition Coil",
      repairId: [2],
    },
    {
      id: 3,
      repairName: "Replace Fuel Pump",
      repairId: [4],
    },
    {
      id: 4,
      repairName: "Replace Spark Plugs",
      repairId: [5],
    },
    {
      id: 5,
      repairName: "Replace Battery",
      repairId: [6],
    },
    {
      id: 6,
      repairName: "Recharge Battery",
      repairId: [7],
    },
    {
      id: 7,
      repairName: "Clean Battery Cable Terminal",
      repairId: [8],
    },
    {
      id: 8,
      repairName: "Replace Starter Motor",
      repairId: [9],
    },
    {
      id: 9,
      repairName: "Replace Intake Manifold Gasket",
      repairId: [10],
    },
    {
      id: 10,
      repairName: "Replace Crank Shaft Sensor",
      repairId: [11],
    },
    {
      id: 11,
      repairName: "Oil Change",
      repairId: [12],
    },
    {
      id: 12,
      repairName: "Replace AC Compressor",
      repairId: [15],
    },
    {
      id: 13,
      repairName: "Replace Alternator",
      repairId: [16],
    },
    {
      id: 14,
      repairName: "Replace Drive Belt",
      repairId: [17],
    },
    {
      id: 15,
      repairName: "Replace Drive Belt Tensioner",
      repairId: [18],
    },
    {
      id: 16,
      repairName: "Replace Idler Pulley",
      repairId: [19],
    },
    {
      id: 17,
      repairName: "Replace Power Steering Pump",
      repairId: [21],
    },
    {
      id: 18,
      repairName: "Replace Engine Water Pump",
      repairId: [22],
    },
    {
      id: 19,
      repairName: "Replace Front Brake Pads",
      repairId: [23],
    },
    {
      id: 20,
      repairName: "Replace Rear Brake Pads",
      repairId: [24],
    },
    {
      id: 21,
      repairName: "Resurface Brake Rotor",
      repairId: [25],
    },
    {
      id: 22,
      repairName: "Replace Clutch",
      repairId: [27],
    },
    {
      id: 23,
      repairName: "Wheel Alignment",
      repairId: [28],
    },
    {
      id: 24,
      repairName: "Replace Front Brake Rotors",
      repairId: [29],
    },
    {
      id: 25,
      repairName: "Replace Rear Brake Rotors",
      repairId: [30],
    },
    {
      id: 26,
      repairName: "Replace Rack & Pinion Boot",
      repairId: [32],
    },
    {
      id: 27,
      repairName: "Replace Timing Belt",
      repairId: [33],
    },
    {
      id: 28,
      repairName: "Replace Catalytic Converter",
      repairId: [34],
    },
    {
      id: 29,
      repairName: "Replace Engine Mounts",
      repairId: [38],
    },
    {
      id: 30,
      repairName: "Replace Oil Pan Gasket",
      repairId: [40],
    },
    {
      id: 31,
      repairName: "Replace Valve Cover Gasket",
      repairId: [41],
    },
    {
      id: 32,
      repairName: "Replace Cabin Air Filter",
      repairId: [42],
    },
    {
      id: 33,
      repairName: "Replace Cylinder Head Gasket",
      repairId: [43],
    },
    {
      id: 34,
      repairName: "Replace Radiator",
      repairId: [44],
    },
    {
      id: 35,
      repairName: "Replace Fuel Filter",
      repairId: [46],
    },
    {
      id: 36,
      repairName: "Service Engine Coolant",
      repairId: [47],
    },
    {
      id: 37,
      repairName: "Replace Thermostat",
      repairId: [49],
    },
    {
      id: 38,
      repairName: "Replace Brake Master Cylinder",
      repairId: [50],
    },
    {
      id: 39,
      repairName: "Replace Wheel Speed Sensor",
      repairId: [51],
    },
    {
      id: 40,
      repairName: "Replace Fuel Cap",
      repairId: [52],
    },
    {
      id: 41,
      repairName: "Replace Exhaust Gas Recirculation (EGR) Valve",
      repairId: [54],
    },
    {
      id: 42,
      repairName: "Replace Oil Pump",
      repairId: [55],
    },
    {
      id: 43,
      repairName: "Tire Rotation",
      repairId: [56],
    },
    {
      id: 44,
      repairName: "Service Brake Fluid",
      repairId: [57],
    },
    {
      id: 45,
      repairName: "Service Automatic Transmission Fluid",
      repairId: [58],
    },
    {
      id: 46,
      repairName: "Recharge AC System",
      repairId: [59],
    },
    {
      id: 47,
      repairName: "Replace AC Condenser",
      repairId: [60],
    },
    {
      id: 48,
      repairName: "Replace Brake Booster",
      repairId: [61],
    },
    {
      id: 49,
      repairName: "Replace Idle Air Control Valve",
      repairId: [62],
    },
    {
      id: 50,
      repairName: "Replace Cam Shaft Position Sensor",
      repairId: [63],
    }
  ],
  popularRepairsIds: [11, 19, 20, 4, 24, 25]
};

function repairsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_REPAIR_TO_CART: {
      // DON'T ADD THE SAME ITEM TWICE
      if (state.cart.includes(action.data)) {
        return state;
      }
      
      return {
        ...state,
        cart: [...state.cart, action.data]
      }
    }
    case types.REMOVE_REPAIR_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(element => element.id !== action.data)
      }
    }

    default: {
      return state;
    }
  }

  return state;
}

export default repairsReducer;
