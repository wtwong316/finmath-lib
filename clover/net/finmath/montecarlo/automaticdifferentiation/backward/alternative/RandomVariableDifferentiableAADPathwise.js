var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":954,"id":16615,"methods":[{"el":287,"sc":2,"sl":285},{"el":291,"sc":2,"sl":289},{"el":295,"sc":2,"sl":293},{"el":299,"sc":2,"sl":297},{"el":303,"sc":2,"sl":301},{"el":309,"sc":2,"sl":305},{"el":313,"sc":2,"sl":311},{"el":317,"sc":2,"sl":315},{"el":322,"sc":2,"sl":319},{"el":365,"sc":2,"sl":324},{"el":370,"sc":2,"sl":367},{"el":381,"sc":2,"sl":375},{"el":389,"sc":2,"sl":383},{"el":397,"sc":2,"sl":391},{"el":405,"sc":2,"sl":399},{"el":413,"sc":2,"sl":407},{"el":421,"sc":2,"sl":415},{"el":429,"sc":2,"sl":423},{"el":437,"sc":2,"sl":431},{"el":445,"sc":2,"sl":439},{"el":453,"sc":2,"sl":447},{"el":461,"sc":2,"sl":455},{"el":466,"sc":2,"sl":463},{"el":474,"sc":2,"sl":471},{"el":482,"sc":2,"sl":479},{"el":487,"sc":2,"sl":484},{"el":492,"sc":2,"sl":489},{"el":500,"sc":2,"sl":497},{"el":508,"sc":2,"sl":505},{"el":516,"sc":2,"sl":513},{"el":521,"sc":2,"sl":518},{"el":529,"sc":2,"sl":526},{"el":537,"sc":2,"sl":534},{"el":545,"sc":2,"sl":542},{"el":553,"sc":2,"sl":550},{"el":561,"sc":2,"sl":558},{"el":569,"sc":2,"sl":566},{"el":577,"sc":2,"sl":574},{"el":585,"sc":2,"sl":582},{"el":593,"sc":2,"sl":590},{"el":601,"sc":2,"sl":598},{"el":609,"sc":2,"sl":606},{"el":617,"sc":2,"sl":614},{"el":625,"sc":2,"sl":622},{"el":633,"sc":2,"sl":630},{"el":641,"sc":2,"sl":638},{"el":649,"sc":2,"sl":646},{"el":657,"sc":2,"sl":654},{"el":665,"sc":2,"sl":659},{"el":673,"sc":2,"sl":667},{"el":681,"sc":2,"sl":675},{"el":689,"sc":2,"sl":683},{"el":697,"sc":2,"sl":691},{"el":705,"sc":2,"sl":699},{"el":713,"sc":2,"sl":707},{"el":721,"sc":2,"sl":715},{"el":729,"sc":2,"sl":723},{"el":737,"sc":2,"sl":731},{"el":745,"sc":2,"sl":739},{"el":753,"sc":2,"sl":747},{"el":761,"sc":2,"sl":755},{"el":772,"sc":2,"sl":766},{"el":783,"sc":2,"sl":777},{"el":794,"sc":2,"sl":788},{"el":802,"sc":2,"sl":796},{"el":813,"sc":2,"sl":807},{"el":821,"sc":2,"sl":815},{"el":829,"sc":2,"sl":823},{"el":837,"sc":2,"sl":831},{"el":845,"sc":2,"sl":839},{"el":856,"sc":2,"sl":850},{"el":864,"sc":2,"sl":858},{"el":872,"sc":2,"sl":866},{"el":880,"sc":2,"sl":874},{"el":888,"sc":2,"sl":882},{"el":899,"sc":2,"sl":893},{"el":907,"sc":2,"sl":901},{"el":915,"sc":2,"sl":909},{"el":923,"sc":2,"sl":917},{"el":928,"sc":2,"sl":925},{"el":933,"sc":2,"sl":930},{"el":938,"sc":2,"sl":935},{"el":943,"sc":2,"sl":940},{"el":948,"sc":2,"sl":945},{"el":953,"sc":2,"sl":950}],"name":"RandomVariableDifferentiableAADPathwise","sl":35},{"el":46,"id":16615,"methods":[],"name":"RandomVariableDifferentiableAADPathwise.OperatorType","sl":41},{"el":280,"id":16615,"methods":[{"el":60,"sc":7,"sl":57},{"el":66,"sc":9,"sl":63},{"el":70,"sc":3,"sl":54},{"el":78,"sc":3,"sl":71},{"el":98,"sc":3,"sl":80},{"el":148,"sc":6,"sl":145},{"el":157,"sc":6,"sl":154},{"el":267,"sc":7,"sl":264},{"el":279,"sc":3,"sl":100}],"name":"RandomVariableDifferentiableAADPathwise.OperatorTreeNode","sl":48}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]