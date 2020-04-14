var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":470,"id":8451,"methods":[{"el":86,"sc":2,"sl":69},{"el":99,"sc":2,"sl":97},{"el":111,"sc":2,"sl":109},{"el":124,"sc":2,"sl":121},{"el":157,"sc":2,"sl":144},{"el":183,"sc":2,"sl":177},{"el":200,"sc":2,"sl":198},{"el":223,"sc":2,"sl":215},{"el":244,"sc":2,"sl":234},{"el":282,"sc":2,"sl":261},{"el":304,"sc":2,"sl":295},{"el":320,"sc":4,"sl":319},{"el":323,"sc":2,"sl":317},{"el":356,"sc":2,"sl":334},{"el":384,"sc":2,"sl":358},{"el":406,"sc":2,"sl":398},{"el":445,"sc":2,"sl":416},{"el":453,"sc":2,"sl":447},{"el":462,"sc":2,"sl":460},{"el":467,"sc":2,"sl":464}],"name":"ForwardCurveInterpolation","sl":35},{"el":51,"id":8451,"methods":[],"name":"ForwardCurveInterpolation.InterpolationEntityForward","sl":42}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_207":{"methods":[{"sl":121},{"sl":295},{"sl":317},{"sl":319},{"sl":358},{"sl":398},{"sl":416},{"sl":464}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":122},{"sl":123},{"sl":296},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":318},{"sl":320},{"sl":322},{"sl":361},{"sl":363},{"sl":364},{"sl":365},{"sl":367},{"sl":405},{"sl":417},{"sl":418},{"sl":419},{"sl":420},{"sl":422},{"sl":423},{"sl":424},{"sl":444},{"sl":466}]},"test_239":{"methods":[{"sl":121},{"sl":295},{"sl":317},{"sl":319},{"sl":358},{"sl":398},{"sl":416},{"sl":464}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":122},{"sl":123},{"sl":296},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":318},{"sl":320},{"sl":322},{"sl":361},{"sl":363},{"sl":364},{"sl":365},{"sl":367},{"sl":405},{"sl":417},{"sl":418},{"sl":419},{"sl":420},{"sl":422},{"sl":423},{"sl":424},{"sl":444},{"sl":466}]},"test_464":{"methods":[{"sl":121},{"sl":295},{"sl":317},{"sl":319},{"sl":358},{"sl":398},{"sl":416},{"sl":464}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":122},{"sl":123},{"sl":296},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":318},{"sl":320},{"sl":322},{"sl":361},{"sl":363},{"sl":364},{"sl":365},{"sl":367},{"sl":405},{"sl":417},{"sl":418},{"sl":419},{"sl":420},{"sl":422},{"sl":423},{"sl":424},{"sl":444},{"sl":466}]},"test_70":{"methods":[{"sl":121},{"sl":234},{"sl":334},{"sl":358},{"sl":398},{"sl":416}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":122},{"sl":123},{"sl":235},{"sl":237},{"sl":238},{"sl":239},{"sl":240},{"sl":243},{"sl":336},{"sl":338},{"sl":339},{"sl":340},{"sl":341},{"sl":345},{"sl":346},{"sl":347},{"sl":348},{"sl":349},{"sl":350},{"sl":353},{"sl":354},{"sl":361},{"sl":363},{"sl":364},{"sl":365},{"sl":367},{"sl":405},{"sl":417},{"sl":418},{"sl":419},{"sl":420},{"sl":422},{"sl":423},{"sl":424},{"sl":444}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 70, 239, 464], [207, 70, 239, 464], [207, 70, 239, 464], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [70], [70], [], [70], [70], [70], [70], [], [], [70], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 239, 464], [207, 239, 464], [], [207, 239, 464], [207, 239, 464], [207, 239, 464], [207, 239, 464], [], [207, 239, 464], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 239, 464], [207, 239, 464], [207, 239, 464], [207, 239, 464], [], [207, 239, 464], [], [], [], [], [], [], [], [], [], [], [], [70], [], [70], [], [70], [70], [70], [70], [], [], [], [70], [70], [70], [70], [70], [70], [], [], [70], [70], [], [], [], [207, 70, 239, 464], [], [], [207, 70, 239, 464], [], [207, 70, 239, 464], [207, 70, 239, 464], [207, 70, 239, 464], [], [207, 70, 239, 464], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 70, 239, 464], [], [], [], [], [], [], [207, 70, 239, 464], [], [], [], [], [], [], [], [], [], [], [207, 70, 239, 464], [207, 70, 239, 464], [207, 70, 239, 464], [207, 70, 239, 464], [207, 70, 239, 464], [], [207, 70, 239, 464], [207, 70, 239, 464], [207, 70, 239, 464], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 70, 239, 464], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 239, 464], [], [207, 239, 464], [], [], [], []]