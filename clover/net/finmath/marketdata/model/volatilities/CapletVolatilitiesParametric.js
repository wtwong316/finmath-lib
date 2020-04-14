var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":200,"id":5061,"methods":[{"el":61,"sc":2,"sl":49},{"el":86,"sc":2,"sl":76},{"el":102,"sc":2,"sl":99},{"el":116,"sc":2,"sl":114},{"el":124,"sc":2,"sl":121},{"el":177,"sc":2,"sl":129},{"el":188,"sc":2,"sl":179},{"el":193,"sc":2,"sl":190},{"el":198,"sc":2,"sl":195}],"name":"CapletVolatilitiesParametric","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_177":{"methods":[{"sl":76},{"sl":99},{"sl":114},{"sl":121},{"sl":129}],"name":"testFlatVolatilityUsingD","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":101},{"sl":115},{"sl":123},{"sl":131},{"sl":135},{"sl":141},{"sl":142},{"sl":172},{"sl":175},{"sl":176}]},"test_258":{"methods":[{"sl":76},{"sl":99},{"sl":114},{"sl":121},{"sl":129}],"name":"testDecayVolatility","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":101},{"sl":115},{"sl":123},{"sl":131},{"sl":135},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":147},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":159},{"sl":175},{"sl":176}]},"test_270":{"methods":[{"sl":76},{"sl":99},{"sl":114},{"sl":121},{"sl":129}],"name":"testFlatVolatilityUsingA","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":101},{"sl":115},{"sl":123},{"sl":131},{"sl":135},{"sl":141},{"sl":142},{"sl":172},{"sl":175},{"sl":176}]},"test_277":{"methods":[{"sl":49},{"sl":76},{"sl":129},{"sl":179},{"sl":195}],"name":"testVolatilityCalibration","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":131},{"sl":132},{"sl":135},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":147},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":159},{"sl":172},{"sl":175},{"sl":176},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":197}]},"test_441":{"methods":[{"sl":49},{"sl":76},{"sl":129},{"sl":179},{"sl":195}],"name":"testVolatilityCalibration","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":131},{"sl":132},{"sl":135},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":147},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":159},{"sl":172},{"sl":175},{"sl":176},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":197}]},"test_505":{"methods":[{"sl":76},{"sl":99},{"sl":114},{"sl":121},{"sl":129}],"name":"testIntegratedFourParameterExponentialVolatilityParamSet1","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":101},{"sl":115},{"sl":123},{"sl":131},{"sl":135},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":147},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":159},{"sl":175},{"sl":176}]},"test_525":{"methods":[{"sl":76},{"sl":99},{"sl":114},{"sl":121},{"sl":129}],"name":"testIntegratedFourParameterExponentialVolatilityParamSetCZero","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":101},{"sl":115},{"sl":123},{"sl":131},{"sl":135},{"sl":141},{"sl":142},{"sl":172},{"sl":175},{"sl":176}]},"test_544":{"methods":[{"sl":129}],"name":"testCap","pass":true,"statements":[{"sl":131},{"sl":135},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":147},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":159},{"sl":175},{"sl":176}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [277, 441], [], [], [], [], [], [277, 441], [277, 441], [277, 441], [277, 441], [277, 441], [277, 441], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [525, 277, 177, 505, 441, 270, 258], [], [], [], [525, 277, 177, 505, 441, 270, 258], [525, 277, 177, 505, 441, 270, 258], [525, 277, 177, 505, 441, 270, 258], [525, 277, 177, 505, 441, 270, 258], [525, 277, 177, 505, 441, 270, 258], [525, 277, 177, 505, 441, 270, 258], [], [], [], [], [], [], [], [], [], [], [], [], [], [525, 177, 505, 270, 258], [], [525, 177, 505, 270, 258], [], [], [], [], [], [], [], [], [], [], [], [], [525, 177, 505, 270, 258], [525, 177, 505, 270, 258], [], [], [], [], [], [525, 177, 505, 270, 258], [], [525, 177, 505, 270, 258], [], [], [], [], [], [525, 544, 277, 177, 505, 441, 270, 258], [], [525, 544, 277, 177, 505, 441, 270, 258], [277, 441], [], [], [525, 544, 277, 177, 505, 441, 270, 258], [], [], [], [], [], [525, 544, 277, 177, 505, 441, 270, 258], [525, 544, 277, 177, 505, 441, 270, 258], [544, 277, 505, 441, 258], [544, 277, 505, 441, 258], [], [544, 277, 505, 441, 258], [544, 277, 505, 441, 258], [], [544, 277, 505, 441, 258], [544, 277, 505, 441, 258], [544, 277, 505, 441, 258], [544, 277, 505, 441, 258], [544, 277, 505, 441, 258], [], [], [], [], [], [544, 277, 505, 441, 258], [], [], [], [], [], [], [], [], [], [], [], [], [525, 277, 177, 441, 270], [], [], [525, 544, 277, 177, 505, 441, 270, 258], [525, 544, 277, 177, 505, 441, 270, 258], [], [], [277, 441], [], [277, 441], [277, 441], [277, 441], [277, 441], [277, 441], [], [277, 441], [], [], [], [], [], [], [], [277, 441], [], [277, 441], [], [], []]