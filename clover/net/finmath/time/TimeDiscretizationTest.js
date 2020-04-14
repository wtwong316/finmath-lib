var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":232,"id":48244,"methods":[{"el":22,"sc":2,"sl":20},{"el":27,"sc":2,"sl":24},{"el":38,"sc":2,"sl":29},{"el":49,"sc":2,"sl":40},{"el":60,"sc":2,"sl":51},{"el":71,"sc":2,"sl":62},{"el":82,"sc":2,"sl":73},{"el":93,"sc":2,"sl":84},{"el":104,"sc":2,"sl":95},{"el":115,"sc":2,"sl":106},{"el":126,"sc":2,"sl":117},{"el":137,"sc":2,"sl":128},{"el":144,"sc":2,"sl":139},{"el":151,"sc":2,"sl":146},{"el":158,"sc":2,"sl":153},{"el":165,"sc":2,"sl":160},{"el":176,"sc":2,"sl":167},{"el":187,"sc":2,"sl":178},{"el":198,"sc":2,"sl":189},{"el":209,"sc":2,"sl":200},{"el":220,"sc":2,"sl":211},{"el":231,"sc":2,"sl":222}],"name":"TimeDiscretizationTest","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":20},{"sl":62}],"name":"constructWithBoxedArrayAtSmallTickSize","pass":true,"statements":[{"sl":21},{"sl":65},{"sl":66},{"sl":68},{"sl":70}]},"test_118":{"methods":[{"sl":146}],"name":"constructWithNumberOfStepsSmallerThanTickSize","pass":true,"statements":[{"sl":148},{"sl":150}]},"test_152":{"methods":[{"sl":139}],"name":"constructWithNumberOfSteps","pass":true,"statements":[{"sl":141},{"sl":143}]},"test_164":{"methods":[{"sl":20},{"sl":128}],"name":"constructWithArrayListAtSmallTickSize","pass":true,"statements":[{"sl":21},{"sl":131},{"sl":132},{"sl":134},{"sl":136}]},"test_176":{"methods":[{"sl":211}],"name":"testIntersectionWithSubTickDuplicates","pass":true,"statements":[{"sl":214},{"sl":215},{"sl":217},{"sl":219}]},"test_300":{"methods":[{"sl":160}],"name":"constructWithIntervalShortStubAtFront","pass":true,"statements":[{"sl":162},{"sl":164}]},"test_305":{"methods":[{"sl":20},{"sl":117}],"name":"constructWithArrayListAtBigTickSize","pass":true,"statements":[{"sl":21},{"sl":120},{"sl":121},{"sl":123},{"sl":125}]},"test_376":{"methods":[{"sl":167}],"name":"testUnionWithNoDuplicates","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":173},{"sl":175}]},"test_4":{"methods":[{"sl":222}],"name":"testIntersectionWithDifferentTickSizes","pass":true,"statements":[{"sl":225},{"sl":226},{"sl":228},{"sl":230}]},"test_407":{"methods":[{"sl":200}],"name":"testIntersectionWithNoDuplicates","pass":true,"statements":[{"sl":203},{"sl":204},{"sl":206},{"sl":208}]},"test_410":{"methods":[{"sl":153}],"name":"constructWithIntervalShortStubAtEnd","pass":true,"statements":[{"sl":155},{"sl":157}]},"test_424":{"methods":[{"sl":20},{"sl":73}],"name":"constructWithSetAtDefaultTickSize","pass":true,"statements":[{"sl":21},{"sl":76},{"sl":77},{"sl":79},{"sl":81}]},"test_449":{"methods":[{"sl":189}],"name":"testUnionWithDifferentTickSizes","pass":true,"statements":[{"sl":192},{"sl":193},{"sl":195},{"sl":197}]},"test_533":{"methods":[{"sl":178}],"name":"testUnionWithSubTickDuplicates","pass":true,"statements":[{"sl":181},{"sl":182},{"sl":184},{"sl":186}]},"test_541":{"methods":[{"sl":20},{"sl":29}],"name":"constructWithUnboxedArrayAtDefaultTickSize","pass":true,"statements":[{"sl":21},{"sl":32},{"sl":33},{"sl":35},{"sl":37}]},"test_549":{"methods":[{"sl":20},{"sl":84}],"name":"constructWithSetAtBigTickSize","pass":true,"statements":[{"sl":21},{"sl":87},{"sl":88},{"sl":90},{"sl":92}]},"test_552":{"methods":[{"sl":20},{"sl":95}],"name":"constructWithSetAtSmallTickSize","pass":true,"statements":[{"sl":21},{"sl":98},{"sl":99},{"sl":101},{"sl":103}]},"test_588":{"methods":[{"sl":20},{"sl":106}],"name":"constructWithArrayListAtDefaultTickSize","pass":true,"statements":[{"sl":21},{"sl":109},{"sl":110},{"sl":112},{"sl":114}]},"test_60":{"methods":[{"sl":20},{"sl":51}],"name":"constructWithBoxedArrayAtBigTickSize","pass":true,"statements":[{"sl":21},{"sl":54},{"sl":55},{"sl":57},{"sl":59}]},"test_62":{"methods":[{"sl":20},{"sl":40}],"name":"constructWithBoxedArrayAtDefaultTickSize","pass":true,"statements":[{"sl":21},{"sl":43},{"sl":44},{"sl":46},{"sl":48}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [588, 164, 549, 552, 62, 424, 305, 0, 60, 541], [588, 164, 549, 552, 62, 424, 305, 0, 60, 541], [], [], [], [], [], [], [], [541], [], [], [541], [541], [], [541], [], [541], [], [], [62], [], [], [62], [62], [], [62], [], [62], [], [], [60], [], [], [60], [60], [], [60], [], [60], [], [], [0], [], [], [0], [0], [], [0], [], [0], [], [], [424], [], [], [424], [424], [], [424], [], [424], [], [], [549], [], [], [549], [549], [], [549], [], [549], [], [], [552], [], [], [552], [552], [], [552], [], [552], [], [], [588], [], [], [588], [588], [], [588], [], [588], [], [], [305], [], [], [305], [305], [], [305], [], [305], [], [], [164], [], [], [164], [164], [], [164], [], [164], [], [], [152], [], [152], [], [152], [], [], [118], [], [118], [], [118], [], [], [410], [], [410], [], [410], [], [], [300], [], [300], [], [300], [], [], [376], [], [], [376], [376], [], [376], [], [376], [], [], [533], [], [], [533], [533], [], [533], [], [533], [], [], [449], [], [], [449], [449], [], [449], [], [449], [], [], [407], [], [], [407], [407], [], [407], [], [407], [], [], [176], [], [], [176], [176], [], [176], [], [176], [], [], [4], [], [], [4], [4], [], [4], [], [4], [], []]