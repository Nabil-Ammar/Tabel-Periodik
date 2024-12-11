// Data untuk semua unsur periodik
const elements = [
    // Golongan 1A
    { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: 1.008, gridRow: 1, gridColumn: 1,
        electronConfig: "1s¹", group: "1a"},
      { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicMass: 6.94, gridRow: 2, gridColumn: 1,
        electronConfig: "1s² 2s¹", nobleGasConfig: "[He] 2s¹", group: "1a" },
      { symbol: "Na", name: "Sodium", atomicNumber: 11, atomicMass: 22.99, gridRow: 3, gridColumn: 1,
        electronConfig: "1s² 2s² 2p6 3s¹", nobleGasConfig: "[Ne] 3s¹", group: "1a" },
      { symbol: "K", name: "Potassium", atomicNumber: 19, atomicMass: 39.10, gridRow: 4, gridColumn: 1,
        electronConfig: "1s² 2s² 2p6 3s² 3p6 4s¹", nobleGasConfig: "[Ar] 4s¹", group: "1a" },
      { symbol: "Rb", name: "Rubidium", atomicNumber: 37, atomicMass: 85.47, gridRow: 5, gridColumn: 1,
        electronConfig: "1s² 2s² 2p6 3s² 3p6 4s² 5s¹", nobleGasConfig: "[Kr] 5s¹", group: "1a" },
      { symbol: "Cs", name: "Cesium", atomicNumber: 55, atomicMass: 132.91, gridRow: 6, gridColumn: 1,
        electronConfig: "1s² 2s² 2p6 3s² 3p6 4s² 5s² 6s¹", nobleGasConfig: "[Xe] 6s¹", group: "1a" },
      { symbol: "Fr", name: "Francium", atomicNumber: 87, atomicMass: 223.02, gridRow: 7, gridColumn: 1,
        electronConfig: "1s² 2s² 2p6 3s² 3p6 4s² 5s² 6s² 7s¹", nobleGasConfig: "[Rn] 7s¹", group: "1a" },

  // Golongan 2A
  {
    symbol: "Be",
    name: "Beryllium",
    atomicNumber: 4,
    atomicMass: 9.0122,
    gridRow: 2,
    gridColumn: 2,
    electronConfig: "1s² 2s²",
    nobleGasConfig: "[He] 2s²", group: "2a"
  },
  {
    symbol: "Mg",
    name: "Magnesium",
    atomicNumber: 12,
    atomicMass: 24.305,
    gridRow: 3,
    gridColumn: 2,
    electronConfig: "1s² 2s²",
    nobleGasConfig: "[Ne] 3s²", group: "2a"
  },
  {
    symbol: "Ca",
    name: "Calcium",
    atomicNumber: 20,
    atomicMass: 40.08,
    gridRow: 4,
    gridColumn: 2,
    electronConfig: "1s² 2s² 3s²",
    nobleGasConfig: "[Ar] 4s²", group: "2a"
  },
  {
    symbol: "Sr",
    name: "Strontium",
    atomicNumber: 38,
    atomicMass: 87.62,
    gridRow: 5,
    gridColumn: 2,
    electronConfig: "1s² 2s² 3s² 5s²",
    nobleGasConfig: "[Kr] 5s²", group: "2a"
  },
  {
    symbol: "Ba",
    name: "Barium",
    atomicNumber: 56,
    atomicMass: 137.33,
    gridRow: 6,
    gridColumn: 2,
    electronConfig: "1s² 2s² 3s² 4s² 6s²",
    nobleGasConfig: "[Xe] 6s²", group: "2a"
  },
  {
    symbol: "Ra",
    name: "Radium",
    atomicNumber: 88,
    atomicMass: 226,
    gridRow: 7,
    gridColumn: 2,
    electronConfig: "1s² 2s² 3s² 4s² 5s² 7s²",
    nobleGasConfig: "[Rn] 7s²", group: "2a"
  },
  // Golongan 3A
  {
    symbol: "B",
    name: "Boron",
    atomicNumber: 5,
    atomicMass: 10.81,
    gridRow: 2,
    gridColumn: 13,
    electronConfig: "1s² 2s² 2p¹",
    nobleGasConfig: "[He]2s² 2p¹", group: "3a"
  },
  {
    symbol: "Al",
    name: "Aluminum",
    atomicNumber: 13,
    atomicMass: 26.98,
    gridRow: 3,
    gridColumn: 13,
    electronConfig: "1s² 2s² 2p6 3s² 3p¹",
    nobleGasConfig: "[Ne] 3s² 3p¹", group: "4a"
  },
  {
    symbol: "Ga",
    name: "Gallium",
    atomicNumber: 31,
    atomicMass: 69.72,
    gridRow: 4,
    gridColumn: 13,
    electronConfig: "1s² 2s² 2p6 3s² 3p¹ 4s² 3d¹",
    nobleGasConfig: "[Ar] 4s² 3d¹⁰ 4p¹", group: "4a"
  },
  {
    symbol: "In",
    name: "Indium",
    atomicNumber: 49,
    atomicMass: 114.82,
    gridRow: 5,
    gridColumn: 13,
    electronConfig: "1s² 2s² 2p6 3s² 3d¹ 4s² 4p¹",
    nobleGasConfig: "[Kr] 5s² 4d¹⁰ 5p¹", group: "4a"
  },
  {
    symbol: "Tl",
    name: "Thallium",
    atomicNumber: 81,
    atomicMass: 204.38,
    gridRow: 6,
    gridColumn: 13,
    electronConfig: "1s² 2s² 2p6 3s² 3d¹ 4s² 6p¹",
    nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p¹", group: "4a"
  },
  {
    symbol: "Nh",
    name: "Nihonium",
    atomicNumber: 113,
    atomicMass: 284,
    gridRow: 7,
    gridColumn: 13,
    electronConfig: "1s² 2s² 2p6 3s² 3d¹ 4s² 5p¹",
    nobleGasConfig: "[Fl] 5p¹", group: "6a"
  },

  // Golongan 4A
  {symbol:"C",name:"Carbon",atomicNumber:6,atomicMass:12.01,gridRow:2,gridColumn:14,electronConfig:"1s² 2s² 2p²",nobleGasConfig:"[He] 2s² 2p²", group: "5a"},
  {symbol:"Si",name:"Silicon",atomicNumber:14,atomicMass:28.09,gridRow:3,gridColumn:14,electronConfig:"1s² 2s² 2p⁶ 3s² 3p²",nobleGasConfig:"[Ne] 3s² 3p²", group: "3a"},
  {symbol:"Ge",name:"Germanium",atomicNumber:32,atomicMass:72.63,gridRow:4,gridColumn:14,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²",nobleGasConfig:"[Ar] 4s² 3d¹⁰ 4p²", group: "3a"},
  {symbol:"Sn",name:"Tin",atomicNumber:50,atomicMass:118.71,gridRow:5,gridColumn:14,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p²",nobleGasConfig:"[Kr] 5s² 4d¹⁰ 5p²", group: "4a"},
  {symbol:"Pb",name:"Lead",atomicNumber:82,atomicMass:207.2,gridRow:6,gridColumn:14,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p²",nobleGasConfig:"[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p²", group: "4a"},
  {symbol:"F",name:"Flerovium",atomicNumber:114,atomicMass:289,gridRow:7,gridColumn:14,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p²",nobleGasConfig:"[Rn] 7s² 5f¹⁴ 6d¹⁰ ", group: "6a"},

  // Golongan 5A
  {symbol:"N",name:"Nitrogen",atomicNumber:7,atomicMass:14.01,gridRow:2,gridColumn:15,electronConfig:"1s² 2s² 2p³",nobleGasConfig:"[He] 2s² 2p³", group: "5a"},
  {symbol:"P",name:"Phosphorus",atomicNumber:15,atomicMass:30.97,gridRow:3,gridColumn:15,electronConfig:"1s² 2s² 2p⁶ 3s² 3p³",nobleGasConfig:"[Ne] 3s² 3p³", group: "5a"},
  {symbol:"As",name:"Arsenic",atomicNumber:33,atomicMass:74.92,gridRow:4,gridColumn:15,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³",nobleGasConfig:"[Ar] 4s² 3d¹⁰ 4p³", group: "3a"},
  {symbol:"Sb",name:"Antimony",atomicNumber:51,atomicMass:121.76,gridRow:5,gridColumn:15,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p³",nobleGasConfig:"[Kr] 5s² 4d¹⁰ 5p³", group: "3a"},
  {symbol:"Bi",name:"Bismuth",atomicNumber:83,atomicMass:208.98,gridRow:6,gridColumn:15,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p³",nobleGasConfig:"[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p³", group: "4a"},
  {symbol:"Mc",name:"Moskovium",atomicNumber:115,atomicMass:289,gridRow:7,gridColumn:15,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p³",nobleGasConfig:"[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p³", group: "6a"},

  // Golongan 6A
  {symbol:"O",name:"Oxygen",atomicNumber:8,atomicMass:16.00,gridRow:2,gridColumn:16,electronConfig:"1s² 2s² 2p⁴",nobleGasConfig:"[He] 2s² 2p⁴", group: "5a"},
  {symbol:"S",name:"Sulfur",atomicNumber:16,atomicMass:32.06,gridRow:3,gridColumn:16,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁴",nobleGasConfig:"[Ne] 3s² 3p⁴", group: "5a"},
  {symbol:"Se",name:"Selenium",atomicNumber:34,atomicMass:78.96,gridRow:4,gridColumn:16,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴",nobleGasConfig:"[Ar] 4s² 3d¹⁰ 4p⁴", group: "5a"},
  {symbol:"Te",name:"Tellurium",atomicNumber:52,atomicMass:127.60,gridRow:5,gridColumn:16,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁴",nobleGasConfig:"[Kr] 5s² 4d¹⁰ 5p⁴", group: "3a"},
  {symbol: "Po",name: "Polonium",atomicNumber: 84,atomicMass: 209,gridRow: 6,gridColumn: 16,electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁴",nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁴", group: "4a"},
  {symbol: "Lv",name: "Livermorium",atomicNumber: 116,atomicMass: 293,gridRow: 7,gridColumn: 16,electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁴", nobleGasConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", group: "6a"},

  // Golongan 7A
  {symbol: "F", name: "Fluorine", atomicNumber: 9, atomicMass: 19.00, gridRow: 2, gridColumn: 17, electronConfig: "1s² 2s² 2p⁵", nobleGasConfig: "[He] 2s² 2p⁵", group: "5a"},
  {symbol: "Cl", name: "Chlorine", atomicNumber: 17, atomicMass: 35.45, gridRow: 3, gridColumn: 17, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁵", nobleGasConfig: "[Ne] 3s² 3p⁵", group: "5a"},
  {symbol: "Br", name: "Bromine", atomicNumber: 35, atomicMass: 79.90, gridRow: 4, gridColumn: 17, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵", nobleGasConfig: "[Ar] 4s² 3d¹⁰ 4p⁵", group: "5a"},
  {symbol: "I", name: "Iodine", atomicNumber: 53, atomicMass: 126.90, gridRow: 5, gridColumn: 17, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁵", nobleGasConfig: "[Kr] 5s² 4d¹⁰ 5p⁵", group: "5a"},
  {symbol: "At", name: "Astatin", atomicNumber: 85, atomicMass: 210, gridRow: 6, gridColumn: 17, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁵", nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁵", group: "4a"},
  {symbol: "Ts", name: "Tennessine", atomicNumber: 117, atomicMass: 294, gridRow: 7, gridColumn: 17, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p⁵", nobleGasConfig: "[Rn]  7s² 5f¹⁴ 6d¹⁰ 7p⁵", group: "6a"},

  // Golongan 8A
  {symbol:"He",name:"Helium",atomicNumber:2,atomicMass:4.00,gridRow:1,gridColumn:18,electronConfig:"1s²",nobleGasConfig:"1s²", group: "8a"},
  {symbol:"Ne",name:"Neon",atomicNumber:10,atomicMass:20.18,gridRow:2,gridColumn:18,electronConfig:"1s² 2s² 2p⁶",nobleGasConfig:"[He] 2s² 2p⁶", group: "8a"},
  {symbol:"Ar",name:"Argon",atomicNumber:18,atomicMass:39.95,gridRow:3,gridColumn:18,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶",nobleGasConfig:"[Ne] 3s² 3p⁶", group: "8a"},
  {symbol:"Kr",name:"Krypton",atomicNumber:36,atomicMass:83.80,gridRow:4,gridColumn:18,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶",nobleGasConfig:"[Ar] 4s² 3d¹⁰ 4p⁶", group: "8a"},
  {symbol:"Xe",name:"Xenon",atomicNumber:54,atomicMass:131.29,gridRow:5,gridColumn:18,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶",nobleGasConfig:"[Kr] 5s² 4d¹⁰ 5p⁶", group: "8a"},
  {symbol:"Rn",name:"Radon",atomicNumber:86,atomicMass:222,gridRow:6,gridColumn:18,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶",nobleGasConfig:"[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁶", group: "8a"},
  {symbol:"Og",name:"Oganesson",atomicNumber:118,atomicMass:294,gridRow:7,gridColumn:18,electronConfig:"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p⁶",nobleGasConfig:"[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁶", group : "6a"},

  // Golongan 1B
  { symbol: "Cu", name: "Copper", atomicNumber: 29, atomicMass: 63.55, gridRow: 4, gridColumn: 11, nobleGasConfig : "[Ar] 4s¹ 3d¹⁰", electronConfig : "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰", group: "1b" },
  { symbol: "Ag", name: "Silver", atomicNumber: 47, atomicMass: 107.87, gridRow: 5, gridColumn: 11, nobleGasConfig: "[Kr] 4d¹⁰ 5s¹", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹" , group: "1b"},
  { symbol: "Au", name: "Gold", atomicNumber: 79, atomicMass: 196.97, gridRow: 6, gridColumn: 11, nobleGasConfig: "[Xe] 6s¹ 4f¹⁴ 5d¹⁰", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s¹", group: "1b" },
  { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, atomicMass: 280.0, gridRow: 7, gridColumn: 11, nobleGasConfig:"[Rn] 7s¹ 5f¹⁴ 6d¹⁰", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5f¹⁴ 6d¹⁰ 7s¹", group: "6a" },

  // Golongan 2B
  { symbol: "Zn", name: "Zinc", atomicNumber: 30, atomicMass: 65.38, gridRow: 4, gridColumn: 12, nobleGasConfig: "[Ar] 3d¹⁰ 4s²", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²", group: "2b" },
  { symbol: "Cd", name: "Cadmium", atomicNumber: 48, atomicMass: 112.41, gridRow: 5, gridColumn: 12, nobleGasConfig: "[Kr] 4d¹⁰ 5s²", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s²" , group: "2b"},
  { symbol: "Hg", name: "Mercury", atomicNumber: 80, atomicMass: 200.59, gridRow: 6, gridColumn: 12, nobleGasConfig: "[Xe]  6s² 4f¹⁴ 5d¹⁰", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s²" , group: "2b"},
  { symbol: "Cn", name: "Copernicium", atomicNumber: 112, atomicMass: 285.0, gridRow: 7, gridColumn: 12, nobleGasConfig: "[Rn]  7s² 5f¹⁴ 6d¹⁰", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹⁰ 6s² 6d¹⁰ 7s²", group: "6a"},

  // Golongan 3B
  { symbol: "Sc", name: "Scandium", atomicNumber: 21, atomicMass: 44.96, gridRow: 4, gridColumn: 3, electronConfig: "1s² 2s² 3d¹ 4s²", nobleGasConfig: "[Ar] 4s² 3d¹" , group: "3b" },
  { symbol: "Y", name: "Itrium", atomicNumber: 39, atomicMass: 88.90585, gridRow: 5, gridColumn: 3, electronConfig: "1s² 2s² 3d¹ 4s²", nobleGasConfig: "[Kr] 5s² 4d¹", group: "3b" },
  { symbol: "La", name: "Lantanum", atomicNumber: 57, atomicMass: 138.90, gridRow: 6, gridColumn: 3, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹ 6s²",nobleGasConfig: "[Xe] 6s² 5d¹" , group: "lantanida"},
  { symbol: "Ac", name: "Actinium", atomicNumber: 89, atomicMass: 227, gridRow: 7, gridColumn: 3, electronConfig: "1s² 2s² 2p6 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 6d¹ 7s²", nobleGasConfig: "[Rn] 6d¹ 7s²" , group: "aktinida"},

  // Golongan Laktanida
  { symbol: "Ce", name: "Cerium", atomicNumber: 58, atomicMass: 140.12, gridRow: 9, gridColumn: 4, nobleGasConfig: "[Xe] 6s² 4f¹ 5d¹", group: "lantanida"},
  { symbol: "Pr", name: "Praseodymium", atomicNumber: 59, atomicMass: 140.91, gridRow: 9, gridColumn: 5, nobleGasConfig: "[Xe] 6s² 4f³" , group: "lantanida"},
  { symbol: "Nd", name: "Neodimium", atomicNumber: 60, atomicMass: 144.24, gridRow: 9, gridColumn: 6, nobleGasConfig: "[Xe] 6s² 4f⁴", group: "lantanida" },
  { symbol: "Pm", name: "Promethium", atomicNumber: 61, atomicMass: 145.00, gridRow: 9, gridColumn: 7, nobleGasConfig: "[Xe] 6s² 4f⁵" , group: "lantanida"},
  { symbol: "Sm", name: "Samarium", atomicNumber: 62, atomicMass: 150.36, gridRow: 9, gridColumn: 8, nobleGasConfig: "[Xe] 6s² 4f⁶" , group: "lantanida"},
  { symbol: "Eu", name: "Europium", atomicNumber: 63, atomicMass: 151.96, gridRow: 9, gridColumn: 9, nobleGasConfig: "[Xe] 6s² 4f⁷" , group: "lantanida"},
  { symbol: "Gd", name: "Gadolinium", atomicNumber: 64, atomicMass: 157.25, gridRow: 9, gridColumn: 10, nobleGasConfig: "[Xe] 6s² 4f⁷ 5d¹" , group: "lantanida"},
  { symbol: "Tb", name: "Terbium", atomicNumber: 65, atomicMass: 158.93, gridRow: 9, gridColumn: 11, nobleGasConfig: "[Xe] 6s² 4f⁹", group: "lantanida" },
  { symbol: "Dy", name: "Dysprosium", atomicNumber: 66, atomicMass: 162.50, gridRow: 9, gridColumn: 12, nobleGasConfig: "[Xe] 6s² 4f¹⁰", group: "lantanida" },
  { symbol: "Ho", name: "Holmium", atomicNumber: 67, atomicMass: 164.93, gridRow: 9, gridColumn: 13, nobleGasConfig: "[Xe] 6s² 4f¹¹", group: "lantanida" },
  { symbol: "Er", name: "Erbium", atomicNumber: 68, atomicMass: 167.26, gridRow: 9, gridColumn: 14, nobleGasConfig: "[Xe] 6s² 4f¹²" , group: "lantanida"},
  { symbol: "Tm", name: "Thulium", atomicNumber: 69, atomicMass: 168.93, gridRow: 9, gridColumn: 15, nobleGasConfig: "[Xe] 6s² 4f¹³", group: "lantanida" },
  { symbol: "Yb", name: "Ytterbium", atomicNumber: 70, atomicMass: 173.04, gridRow: 9, gridColumn: 16, nobleGasConfig: "[Xe] 6s² 4f¹⁴" , group: "lantanida"},
  { symbol: "Lu", name: "Lutetium", atomicNumber: 71, atomicMass: 175.00, gridRow: 9, gridColumn: 17, nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d¹", group: "lantanida" },

  // Golongan Aktinida
  { symbol: "Th", name: "Thorium", atomicNumber: 90, atomicMass: 232.04, gridRow: 10, gridColumn: 4, nobleGasConfig: "[Rn] 7s² 6d²" , group: "aktinida"},
  { symbol: "Pa", name: "Protaktinium", atomicNumber: 91, atomicMass: 231.04, gridRow: 10, gridColumn: 5, nobleGasConfig: "[Rn] 7s² 5f² 6d¹" , group: "aktinida"},
  { symbol: "U", name: "Uranium", atomicNumber: 92, atomicMass: 238.03, gridRow: 10, gridColumn: 6, nobleGasConfig: "[Rn] 7s² 5f³ 6d¹", group: "aktinida" },
  { symbol: "Np", name: "Neptunium", atomicNumber: 93, atomicMass: 237, gridRow: 10, gridColumn: 7, nobleGasConfig: "[Rn] 7s² 5f⁴ 6d¹", group: "aktinida" },
  { symbol: "Pu", name: "Plutonium", atomicNumber: 94, atomicMass: 244, gridRow: 10, gridColumn: 8, nobleGasConfig: "[Rn] 7s² 5f⁶" , group: "aktinida"},
  { symbol: "Am", name: "Americium", atomicNumber: 95, atomicMass: 243, gridRow: 10, gridColumn: 9, nobleGasConfig: "[Rn] 7s² 5f⁷" , group: "aktinida"},
  { symbol: "Cm", name: "Curium", atomicNumber: 96, atomicMass: 247, gridRow: 10, gridColumn: 10, nobleGasConfig: "[Rn] 7s² 5f⁸" , group: "aktinida"},
  { symbol: "Bk", name: "Berkelium", atomicNumber: 97, atomicMass: 247, gridRow: 10, gridColumn: 11, nobleGasConfig: "[Rn] 7s² 5f⁹", group: "aktinida" },
  { symbol: "Cf", name: "Californium", atomicNumber: 98, atomicMass: 251, gridRow: 10, gridColumn: 12, nobleGasConfig: "[Rn] 7s² 5f¹⁰", group: "aktinida" },
  { symbol: "Es", name: "Einsteinium", atomicNumber: 99, atomicMass: 252, gridRow: 10, gridColumn: 13, nobleGasConfig: "[Rn] 7s² 5f¹¹", group: "aktinida" },
  { symbol: "Fm", name: "Fermium", atomicNumber: 100, atomicMass: 257, gridRow: 10, gridColumn: 14, nobleGasConfig: "[Rn] 7s² 5f¹²" , group: "aktinida"},
  { symbol: "Md", name: "Mendelevium", atomicNumber: 101, atomicMass: 258, gridRow: 10, gridColumn: 15, nobleGasConfig: "[Rn] 7s² 5f¹³" , group: "aktinida"},
  { symbol: "No", name: "Nobelium", atomicNumber: 102, atomicMass: 259, gridRow: 10, gridColumn: 16, nobleGasConfig: "[Rn] 7s² 5f¹⁴" , group: "aktinida"},
  { symbol: "Lr", name: "Lawrencium", atomicNumber: 103, atomicMass: 266, gridRow: 10, gridColumn: 17, nobleGasConfig: "[Rn] 7s² 5f¹⁵" , group: "aktinida"},

   // Golongan 4B
  { symbol: "Ti", name: "Titanium", atomicNumber: 22, atomicMass: 47.87, gridRow: 4, gridColumn: 4,nobleGasConfig: "[Ar] 4s² 3d²", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²", group: "4b" },
  { symbol: "Zr", name: "Zirkonium", atomicNumber: 40, atomicMass: 91.22, gridRow: 5, gridColumn: 4, nobleGasConfig: "[Kr] 5s² 4d²", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d² 5s²", group: "4b" },
  { symbol: "Hf", name: "Hafnium", atomicNumber: 72, atomicMass: 178.49, gridRow: 6, gridColumn: 4, nobleGasConfig: "[Xe] 6s² 5d² 4f¹⁴", electronConfig: "1s² 2s² 2p6⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d² 6s²" , group: "4b"},
  { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104, atomicMass: 267, gridRow: 7, gridColumn: 4, nobleGasConfig: "[Rn] 7s² 6d² 5f¹⁴", electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d² 7s²" , group: "4b"},
 
   // Golongan 5B
   { symbol: "V", name: "Vanadium", atomicNumber: 23, atomicMass: 50.94, gridRow: 4, gridColumn: 5, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³ ", nobleGasConfig: "[Ar] 4s² 3d³" , group: "5b"},
   { symbol: "Nb", name: "Niobium", atomicNumber: 41, atomicMass: 92.91, gridRow: 5, gridColumn: 5, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁴ 5s¹", nobleGasConfig: "[Kr] 5s¹ 4d⁴", group: "5b"},
   { symbol: "Ta", name: "Tantalum", atomicNumber: 73, atomicMass: 180.95, gridRow: 6, gridColumn: 5, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s² 5d³ 4f¹⁴", nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d³" , group: "5b"},
   { symbol: "Db", name: "Dubnium", atomicNumber: 105, atomicMass: 268.0, gridRow: 7, gridColumn: 5, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d³ 7s² ", nobleGasConfig: "[Rn] 7s² 5f¹⁴ 6d³ " , group: "5b"},
 
   // Golongan 6B
   { symbol: "Cr", name: "Chromium", atomicNumber: 24, atomicMass: 51.996, gridRow: 4, gridColumn: 6, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ ", nobleGasConfig: "[Ar] 4s¹ 3d⁵ ", group: "6b"},
   { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, atomicMass: 95.94, gridRow: 5, gridColumn: 6, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s¹", nobleGasConfig: "[Kr] 5s¹ 4d⁵" , group: "6b"},
   { symbol: "W", name: "Tungsten", atomicNumber: 74, atomicMass: 183.84, gridRow: 6, gridColumn: 6,electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s² 5d⁴ ", nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d⁴" , group: "6b"},
   { symbol: "Sg", name: "Seaborgium", atomicNumber: 106, atomicMass: 271.0, gridRow: 7, gridColumn: 6, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s² 6d² 7s² 5f¹⁴", nobleGasConfig: "[Rn] 7s² 5f¹⁴ 6d² ", group: "6b" },
 
   // Golongan 7B
   { symbol: "Mn", name: "Mangan", atomicNumber: 25, atomicMass: 54.94, gridRow: 4, gridColumn: 7, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²", nobleGasConfig: "[Ar]4s² 3d⁵" , group: "7b"},
  { symbol: "Tc", name: "Technetium", atomicNumber: 43, atomicMass: 98.0, gridRow: 5, gridColumn: 7, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²", nobleGasConfig: "[Kr] 5s² 4d⁵ " , group: "7b"},
  { symbol: "Re", name: "Rhenium", atomicNumber: 75, atomicMass: 186.21, gridRow: 6, gridColumn: 7, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s² 6d⁵ 5f¹⁴", nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d⁵ ", group: "7b"},
   { symbol: "Bh", name: "Bohrium", atomicNumber: 107, atomicMass: 270.0, gridRow: 7, gridColumn: 7, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁵ 7s²", nobleGasConfig : "[Xe] 7s² 5f¹⁴ 6d⁵", group: "7b"},
 
   // Golongan 8B - Bagian 8
  { symbol: "Fe", name: "Iron", atomicNumber: 26, atomicMass: 55.85, gridRow: 4, gridColumn: 8, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²", nobleGasConfig: "[Ar] 4s² 3d⁶ ", group: "8b" },
  { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, atomicMass: 101.07, gridRow: 5, gridColumn: 8, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁷ 5s¹", nobleGasConfig: "[Kr] 5s¹ 4d⁷ " , group: "8b"},
  { symbol: "Os", name: "Osmium", atomicNumber: 76, atomicMass: 190.23, gridRow: 6, gridColumn: 8, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁶ 6s²", nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d⁶ " , group: "8b"},
  { symbol: "Hs", name: "Hassium", atomicNumber: 108, atomicMass: 277.0, gridRow: 7, gridColumn: 8,electronConfig: "1s²	2s²	2p⁶	3s²	3p⁶	3d¹⁰ 4s²	4p⁶	4d¹⁰	4f¹⁴	5s²	5p⁶	5d¹⁰ 6s²	6p⁶	5f¹⁴ 6d⁶	7s²	", nobleGasConfig: "[Rn] 7s² 5f¹⁴ 6d⁶  " , group: "8b"},

  // Golongan 8B - Bagian 9
  { symbol: "Co", name: "Cobalt", atomicNumber: 27, atomicMass: 58.93, gridRow: 4, gridColumn: 9, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²", nobleGasConfig: "[Ar] 4s² 3d⁷", group: "8b"},
  { symbol: "Rh", name: "Rhodium", atomicNumber: 45, atomicMass: 102.91, gridRow: 5, gridColumn: 9, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁷ 5s¹", nobleGasConfig: "[Kr] 5s¹ 4d⁷", group: "8b"},
  { symbol: "Ir", name: "Iridium", atomicNumber: 77, atomicMass: 192.22, gridRow: 6, gridColumn: 9, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁷ 6s²", nobleGasConfig: "[Xe] 6s² 4f¹⁴ 5d⁷ " , group: "8b"},
  { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, atomicMass: 278.0,  gridRow: 7, gridColumn: 9, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁷ 7s²", nobleGasConfig: "[Rn] 7s² 5f¹⁴ 6d⁷ ", group: "6a" },

  // Golongan 8B - Bagian 10
  { symbol: "Ni", name: "Nickel", atomicNumber: 28, atomicMass: 58.69, gridRow: 4, gridColumn: 10, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²", nobleGasConfig: "[Ar] 4s² 3d⁸", group: "8b" },
  { symbol: "Pd", name: "Palladium", atomicNumber: 46, atomicMass: 106.42, gridRow: 5, gridColumn: 10, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹", nobleGasConfig: "[Kr] 5s¹ 4d¹⁰" , group: "8b"},
  { symbol: "Pt", name: "Platinum", atomicNumber: 78, atomicMass: 195.08, gridRow: 6, gridColumn: 10, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁹ 6s¹", nobleGasConfig: "[Xe] 6s¹ 4f¹⁴ 5d⁹" , group: "8b"},
  { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110, atomicMass: 281.0, gridRow: 7, gridColumn: 10, electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁸ 7s²", nobleGasConfig: "[Rn]  7s² 5f¹⁴ 6d⁸", group: "6a" },

];

// Mengisi tabel dengan elemen
const table = document.querySelector(".periodic-table");

function generateTable() {
  elements.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("element");
    div.classList.add(`golongan-${element.group}`);
    div.style.gridRow = element.gridRow;
    div.style.gridColumn = element.gridColumn;

    div.innerHTML = `
      <div class="atomic-number">${element.atomicNumber}</div>
      <div class="symbol">${element.symbol}</div>
      <div class="element-name">${element.name}</div>
    `;

    div.addEventListener("click", () => {
      alert(
        `Nama: ${element.name}\nNomor Atom: ${element.atomicNumber}\nNomor Massa: ${element.atomicMass}\nKonfigurasi Elektron: ${element.electronConfig}\nKonfigurasi dengan Gas Mulia: ${element.nobleGasConfig}`
      );
    });

    table.appendChild(div);
  });
}

generateTable();