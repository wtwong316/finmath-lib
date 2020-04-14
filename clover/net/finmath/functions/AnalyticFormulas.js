var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":1532,"id":1217,"methods":[{"el":38,"sc":2,"sl":36},{"el":82,"sc":2,"sl":53},{"el":116,"sc":2,"sl":97},{"el":142,"sc":2,"sl":128},{"el":171,"sc":2,"sl":155},{"el":199,"sc":2,"sl":182},{"el":255,"sc":2,"sl":215},{"el":290,"sc":2,"sl":271},{"el":325,"sc":2,"sl":306},{"el":358,"sc":2,"sl":337},{"el":391,"sc":2,"sl":370},{"el":428,"sc":2,"sl":407},{"el":462,"sc":2,"sl":440},{"el":495,"sc":2,"sl":474},{"el":558,"sc":2,"sl":509},{"el":592,"sc":2,"sl":570},{"el":626,"sc":2,"sl":604},{"el":660,"sc":2,"sl":638},{"el":699,"sc":2,"sl":672},{"el":722,"sc":2,"sl":712},{"el":745,"sc":2,"sl":735},{"el":766,"sc":2,"sl":757},{"el":793,"sc":2,"sl":783},{"el":826,"sc":2,"sl":818},{"el":854,"sc":2,"sl":846},{"el":882,"sc":2,"sl":874},{"el":910,"sc":2,"sl":902},{"el":946,"sc":2,"sl":929},{"el":974,"sc":2,"sl":961},{"el":1004,"sc":2,"sl":988},{"el":1022,"sc":2,"sl":1019},{"el":1096,"sc":2,"sl":1038},{"el":1141,"sc":2,"sl":1113},{"el":1181,"sc":2,"sl":1157},{"el":1221,"sc":2,"sl":1196},{"el":1261,"sc":2,"sl":1237},{"el":1310,"sc":2,"sl":1277},{"el":1328,"sc":2,"sl":1322},{"el":1375,"sc":2,"sl":1342},{"el":1418,"sc":2,"sl":1390},{"el":1457,"sc":2,"sl":1434},{"el":1494,"sc":2,"sl":1473},{"el":1531,"sc":2,"sl":1512}],"name":"AnalyticFormulas","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_101":{"methods":[{"sl":53},{"sl":128},{"sl":155}],"name":"testBlackScholesPutCallParityATM","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":163},{"sl":164},{"sl":168},{"sl":169}]},"test_102":{"methods":[{"sl":53},{"sl":128},{"sl":509}],"name":"test","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556}]},"test_104":{"methods":[{"sl":53},{"sl":128},{"sl":155}],"name":"testEuropeanCallOption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":163},{"sl":164},{"sl":165}]},"test_105":{"methods":[{"sl":509}],"name":"test","pass":true,"statements":[{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556}]},"test_113":{"methods":[{"sl":53},{"sl":128},{"sl":215}],"name":"testEuropeanCallDelta","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":222},{"sl":225},{"sl":229},{"sl":241},{"sl":249},{"sl":251},{"sl":253}]},"test_115":{"methods":[{"sl":53},{"sl":818}],"name":"testBachelierRiskNeutralProbabilities","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":70},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":825}]},"test_136":{"methods":[{"sl":1113},{"sl":1237}],"name":"testSABRSkewApproximation","pass":true,"statements":[{"sl":1116},{"sl":1117},{"sl":1119},{"sl":1121},{"sl":1122},{"sl":1123},{"sl":1128},{"sl":1130},{"sl":1131},{"sl":1133},{"sl":1136},{"sl":1138},{"sl":1140},{"sl":1239},{"sl":1242},{"sl":1244},{"sl":1245},{"sl":1247},{"sl":1260}]},"test_17":{"methods":[{"sl":53},{"sl":757},{"sl":929},{"sl":988}],"name":"testCMSOption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765},{"sl":938},{"sl":939},{"sl":940},{"sl":942},{"sl":943},{"sl":945},{"sl":996},{"sl":997},{"sl":998},{"sl":1000},{"sl":1001},{"sl":1003}]},"test_175":{"methods":[{"sl":53},{"sl":128},{"sl":155}],"name":"testEuropeanPutOption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":163},{"sl":164},{"sl":168},{"sl":169}]},"test_180":{"methods":[{"sl":570}],"name":"bsTest","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590}]},"test_185":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_203":{"methods":[{"sl":53},{"sl":128},{"sl":407}],"name":"testEuropeanCallVega","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":414},{"sl":422},{"sl":424},{"sl":426}]},"test_213":{"methods":[{"sl":570},{"sl":604},{"sl":638},{"sl":672}],"name":"testProductAADSensitivities","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590},{"sl":611},{"sl":619},{"sl":620},{"sl":622},{"sl":624},{"sl":645},{"sl":653},{"sl":654},{"sl":656},{"sl":658},{"sl":679},{"sl":684},{"sl":692},{"sl":694},{"sl":697}]},"test_215":{"methods":[{"sl":53},{"sl":128}],"name":"testProductImplementation","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_225":{"methods":[{"sl":53},{"sl":128},{"sl":509}],"name":"test","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556}]},"test_229":{"methods":[{"sl":53},{"sl":509},{"sl":818},{"sl":874}],"name":"testConversions","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556},{"sl":825},{"sl":881}]},"test_246":{"methods":[{"sl":1512}],"name":"testEuropeanCallOption","pass":true,"statements":[{"sl":1520},{"sl":1521},{"sl":1522},{"sl":1523},{"sl":1524},{"sl":1525},{"sl":1526},{"sl":1527}]},"test_252":{"methods":[{"sl":53},{"sl":128}],"name":"test","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_261":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_266":{"methods":[{"sl":53},{"sl":757},{"sl":874}],"name":"testCapletSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765},{"sl":881}]},"test_277":{"methods":[{"sl":53}],"name":"testVolatilityCalibration","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":70},{"sl":75},{"sl":76},{"sl":78},{"sl":80}]},"test_286":{"methods":[{"sl":604}],"name":"test","pass":true,"statements":[{"sl":611},{"sl":619},{"sl":620},{"sl":622},{"sl":624}]},"test_296":{"methods":[{"sl":53},{"sl":128}],"name":"testBlackScholesNegativeForward","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":70},{"sl":135}]},"test_314":{"methods":[{"sl":97},{"sl":271}],"name":"testHedgePerformance","pass":true,"statements":[{"sl":104},{"sl":109},{"sl":110},{"sl":112},{"sl":114},{"sl":278},{"sl":284},{"sl":286},{"sl":288}]},"test_320":{"methods":[{"sl":53},{"sl":757},{"sl":874}],"name":"testCapletSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765},{"sl":881}]},"test_321":{"methods":[{"sl":53},{"sl":509},{"sl":757}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556},{"sl":765}]},"test_330":{"methods":[{"sl":53},{"sl":128},{"sl":215}],"name":"testEuropeanCallDelta","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":222},{"sl":225},{"sl":229},{"sl":241},{"sl":249},{"sl":251},{"sl":253}]},"test_335":{"methods":[{"sl":846}],"name":"\"{3}-{2}-{1}\"","pass":true,"statements":[{"sl":853}]},"test_340":{"methods":[{"sl":818}],"name":"testSwaption","pass":true,"statements":[{"sl":825}]},"test_342":{"methods":[{"sl":1113}],"name":"testSABRCalibration","pass":true,"statements":[{"sl":1116},{"sl":1117},{"sl":1119},{"sl":1121},{"sl":1122},{"sl":1123},{"sl":1128},{"sl":1130},{"sl":1131},{"sl":1136},{"sl":1138},{"sl":1140}]},"test_343":{"methods":[{"sl":53},{"sl":509},{"sl":757}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556},{"sl":765}]},"test_345":{"methods":[{"sl":53},{"sl":128}],"name":"testEuropeanCall","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_351":{"methods":[{"sl":53},{"sl":128},{"sl":407}],"name":"testEuropeanCallVega","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":414},{"sl":422},{"sl":424},{"sl":426}]},"test_357":{"methods":[{"sl":570},{"sl":735}],"name":"testDigitalCaplet","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590},{"sl":744}]},"test_359":{"methods":[{"sl":874}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":881}]},"test_37":{"methods":[{"sl":53},{"sl":712},{"sl":874}],"name":"testCapletSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":721},{"sl":881}]},"test_371":{"methods":[{"sl":509}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556}]},"test_372":{"methods":[{"sl":53},{"sl":128}],"name":"test","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_374":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_381":{"methods":[{"sl":818},{"sl":874}],"name":"testBachelierOptionImpliedVolatility","pass":true,"statements":[{"sl":825},{"sl":881}]},"test_384":{"methods":[{"sl":570},{"sl":735}],"name":"testDigitalCaplet","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590},{"sl":744}]},"test_385":{"methods":[{"sl":53},{"sl":128}],"name":"testDirectValuation","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_388":{"methods":[{"sl":53},{"sl":128}],"name":"testProductImplementation","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_389":{"methods":[{"sl":53},{"sl":128},{"sl":407}],"name":"testEuropeanCallVega","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":414},{"sl":422},{"sl":424},{"sl":426}]},"test_405":{"methods":[{"sl":818}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":825}]},"test_411":{"methods":[{"sl":570},{"sl":735}],"name":"testDigitalCaplet","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590},{"sl":744}]},"test_418":{"methods":[{"sl":604}],"name":"testSensitivities","pass":true,"statements":[{"sl":611},{"sl":619},{"sl":620},{"sl":622},{"sl":624}]},"test_429":{"methods":[{"sl":818},{"sl":874}],"name":"\"Model: {0}, Calibration: {1}\"","pass":true,"statements":[{"sl":825},{"sl":881}]},"test_43":{"methods":[{"sl":53},{"sl":128}],"name":"testProductImplementation","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_433":{"methods":[{"sl":570}],"name":"testDigitalOption","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590}]},"test_439":{"methods":[{"sl":846}],"name":"\"{3}-{2}-{1}\"","pass":true,"statements":[{"sl":853}]},"test_441":{"methods":[{"sl":53},{"sl":818},{"sl":874}],"name":"testVolatilityCalibration","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":70},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":825},{"sl":881}]},"test_452":{"methods":[{"sl":53},{"sl":509},{"sl":757}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556},{"sl":765}]},"test_455":{"methods":[{"sl":570},{"sl":735}],"name":"testDigitalCaplet","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590},{"sl":744}]},"test_46":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaptionCalibration","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_468":{"methods":[{"sl":53},{"sl":757},{"sl":874}],"name":"testCapletSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765},{"sl":881}]},"test_469":{"methods":[{"sl":53},{"sl":128}],"name":"testEuropeanCall","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_47":{"methods":[{"sl":53},{"sl":712}],"name":"testCaplet","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":721}]},"test_471":{"methods":[{"sl":53},{"sl":757}],"name":"testMultiCurveModel","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_474":{"methods":[{"sl":902}],"name":"\"{0}\"","pass":true,"statements":[{"sl":909}]},"test_475":{"methods":[{"sl":53},{"sl":128},{"sl":407}],"name":"testEuropeanCallVega","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":414},{"sl":422},{"sl":424},{"sl":426}]},"test_478":{"methods":[{"sl":53}],"name":"test","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80}]},"test_480":{"methods":[{"sl":818}],"name":"testSwaption","pass":true,"statements":[{"sl":825}]},"test_499":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_502":{"methods":[{"sl":53},{"sl":509},{"sl":757}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556},{"sl":765}]},"test_504":{"methods":[{"sl":53},{"sl":128},{"sl":407}],"name":"test","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":414},{"sl":422},{"sl":424},{"sl":426}]},"test_508":{"methods":[{"sl":818},{"sl":874}],"name":"\"Model: {0}, Calibration: {1}\"","pass":true,"statements":[{"sl":825},{"sl":881}]},"test_510":{"methods":[{"sl":1512}],"name":"testEuropeanPutOption","pass":true,"statements":[{"sl":1520},{"sl":1521},{"sl":1522},{"sl":1523},{"sl":1524},{"sl":1525},{"sl":1526},{"sl":1529}]},"test_511":{"methods":[{"sl":53},{"sl":712}],"name":"testCaplet","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":721}]},"test_514":{"methods":[{"sl":53},{"sl":757},{"sl":874}],"name":"testCapletSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765},{"sl":881}]},"test_519":{"methods":[{"sl":53},{"sl":128}],"name":"testEuropeanCall","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_52":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaptionCalibration","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_528":{"methods":[{"sl":902}],"name":"\"{0}\"","pass":true,"statements":[{"sl":909}]},"test_530":{"methods":[{"sl":818},{"sl":902}],"name":"testBachelierOptionDelta","pass":true,"statements":[{"sl":825},{"sl":909}]},"test_534":{"methods":[{"sl":53},{"sl":128}],"name":"testProductImplementation","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_544":{"methods":[{"sl":53}],"name":"testCap","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80}]},"test_545":{"methods":[{"sl":53},{"sl":757}],"name":"testCaplet","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_546":{"methods":[{"sl":53},{"sl":128},{"sl":215}],"name":"testEuropeanCallDelta","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":222},{"sl":225},{"sl":229},{"sl":241},{"sl":249},{"sl":251},{"sl":253}]},"test_555":{"methods":[{"sl":53},{"sl":757}],"name":"testSingleCurveModel","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_557":{"methods":[{"sl":570},{"sl":735}],"name":"testDigitalCaplet","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590},{"sl":744}]},"test_567":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_569":{"methods":[{"sl":53},{"sl":509},{"sl":757}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556},{"sl":765}]},"test_570":{"methods":[{"sl":818},{"sl":874}],"name":"\"Model: {0}, Calibration: {1}\"","pass":true,"statements":[{"sl":825},{"sl":881}]},"test_571":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_572":{"methods":[{"sl":53},{"sl":128},{"sl":509}],"name":"test","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":518},{"sl":519},{"sl":521},{"sl":524},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556}]},"test_579":{"methods":[{"sl":53},{"sl":757}],"name":"testCaplet","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_58":{"methods":[{"sl":53},{"sl":128}],"name":"testEuropeanCall","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135}]},"test_582":{"methods":[{"sl":53},{"sl":757}],"name":"testCaplet","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_590":{"methods":[{"sl":53},{"sl":757}],"name":"testSwaption","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_591":{"methods":[{"sl":53},{"sl":757}],"name":"testCaplet","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":765}]},"test_594":{"methods":[{"sl":53},{"sl":509},{"sl":757}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556},{"sl":765}]},"test_596":{"methods":[{"sl":509}],"name":"test","pass":true,"statements":[{"sl":518},{"sl":519},{"sl":521},{"sl":529},{"sl":530},{"sl":532},{"sl":533},{"sl":536},{"sl":541},{"sl":542},{"sl":543},{"sl":546},{"sl":547},{"sl":548},{"sl":549},{"sl":551},{"sl":553},{"sl":556}]},"test_6":{"methods":[{"sl":53},{"sl":128},{"sl":215}],"name":"testEuropeanCallDelta","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":222},{"sl":225},{"sl":229},{"sl":241},{"sl":249},{"sl":251},{"sl":253}]},"test_75":{"methods":[{"sl":53},{"sl":128},{"sl":215},{"sl":407},{"sl":474}],"name":"testProductAADSensitivities","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":135},{"sl":222},{"sl":225},{"sl":229},{"sl":241},{"sl":249},{"sl":251},{"sl":253},{"sl":414},{"sl":422},{"sl":424},{"sl":426},{"sl":481},{"sl":489},{"sl":491},{"sl":493}]},"test_86":{"methods":[{"sl":53},{"sl":712},{"sl":874}],"name":"testCaplet","pass":true,"statements":[{"sl":60},{"sl":63},{"sl":67},{"sl":75},{"sl":76},{"sl":78},{"sl":80},{"sl":721},{"sl":881}]},"test_93":{"methods":[{"sl":570},{"sl":735}],"name":"testDigitalCaplet","pass":true,"statements":[{"sl":577},{"sl":585},{"sl":586},{"sl":588},{"sl":590},{"sl":744}]},"test_96":{"methods":[{"sl":1113},{"sl":1277}],"name":"testSABRCurvatureApproximation","pass":true,"statements":[{"sl":1116},{"sl":1117},{"sl":1119},{"sl":1121},{"sl":1122},{"sl":1123},{"sl":1128},{"sl":1130},{"sl":1131},{"sl":1133},{"sl":1136},{"sl":1138},{"sl":1140},{"sl":1279},{"sl":1282},{"sl":1300},{"sl":1301},{"sl":1302},{"sl":1303},{"sl":1305},{"sl":1306},{"sl":1307},{"sl":1309}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [388, 389, 330, 555, 511, 534, 115, 75, 351, 385, 101, 499, 17, 203, 252, 504, 582, 514, 567, 475, 277, 104, 452, 471, 478, 321, 46, 6, 572, 343, 546, 502, 229, 590, 296, 591, 102, 569, 185, 320, 544, 469, 545, 113, 43, 47, 175, 468, 374, 225, 266, 86, 441, 37, 571, 594, 579, 58, 372, 215, 261, 52, 519, 345], [], [], [], [], [], [], [388, 389, 330, 555, 511, 534, 115, 75, 351, 385, 101, 499, 17, 203, 252, 504, 582, 514, 567, 475, 277, 104, 452, 471, 478, 321, 46, 6, 572, 343, 546, 502, 229, 590, 296, 591, 102, 569, 185, 320, 544, 469, 545, 113, 43, 47, 175, 468, 374, 225, 266, 86, 441, 37, 571, 594, 579, 58, 372, 215, 261, 52, 519, 345], [], [], [388, 389, 330, 555, 511, 534, 115, 75, 351, 385, 101, 499, 17, 203, 252, 504, 582, 514, 567, 475, 277, 104, 452, 471, 478, 321, 46, 6, 572, 343, 546, 502, 229, 590, 296, 591, 102, 569, 185, 320, 544, 469, 545, 113, 43, 47, 175, 468, 374, 225, 266, 86, 441, 37, 571, 594, 579, 58, 372, 215, 261, 52, 519, 345], [], [], [], [388, 389, 330, 555, 511, 534, 115, 75, 351, 385, 101, 499, 17, 203, 252, 504, 582, 514, 567, 475, 277, 104, 452, 471, 478, 321, 46, 6, 572, 343, 546, 502, 229, 590, 296, 591, 102, 569, 185, 320, 544, 469, 545, 113, 43, 47, 175, 468, 374, 225, 266, 86, 441, 37, 571, 594, 579, 58, 372, 215, 261, 52, 519, 345], [], [], [115, 277, 296, 441], [], [], [], [], [388, 389, 330, 555, 511, 534, 115, 75, 351, 385, 101, 499, 17, 203, 252, 504, 582, 514, 567, 475, 277, 104, 452, 471, 478, 321, 46, 6, 572, 343, 546, 502, 229, 590, 591, 102, 569, 185, 320, 544, 469, 545, 113, 43, 47, 175, 468, 374, 225, 266, 86, 441, 37, 571, 594, 579, 58, 372, 215, 261, 52, 519, 345], [388, 389, 330, 555, 511, 534, 115, 75, 351, 385, 101, 499, 17, 203, 252, 504, 582, 514, 567, 475, 277, 104, 452, 471, 478, 321, 46, 6, 572, 343, 546, 502, 229, 590, 591, 102, 569, 185, 320, 544, 469, 545, 113, 43, 47, 175, 468, 374, 225, 266, 86, 441, 37, 571, 594, 579, 58, 372, 215, 261, 52, 519, 345], [], [388, 389, 330, 555, 511, 534, 115, 75, 351, 385, 101, 499, 17, 203, 252, 504, 582, 514, 567, 475, 277, 104, 452, 471, 478, 321, 46, 6, 572, 343, 546, 502, 229, 590, 591, 102, 569, 185, 320, 544, 469, 545, 113, 43, 47, 175, 468, 374, 225, 266, 86, 441, 37, 571, 594, 579, 58, 372, 215, 261, 52, 519, 345], [], [388, 389, 330, 555, 511, 534, 115, 75, 351, 385, 101, 499, 17, 203, 252, 504, 582, 514, 567, 475, 277, 104, 452, 471, 478, 321, 46, 6, 572, 343, 546, 502, 229, 590, 591, 102, 569, 185, 320, 544, 469, 545, 113, 43, 47, 175, 468, 374, 225, 266, 86, 441, 37, 571, 594, 579, 58, 372, 215, 261, 52, 519, 345], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [314], [], [], [], [], [], [], [314], [], [], [], [], [314], [314], [], [314], [], [314], [], [], [], [], [], [], [], [], [], [], [], [], [], [388, 389, 330, 534, 75, 351, 385, 101, 203, 252, 504, 475, 104, 6, 572, 546, 296, 102, 469, 113, 43, 175, 225, 58, 372, 215, 519, 345], [], [], [], [], [], [], [388, 389, 330, 534, 75, 351, 385, 101, 203, 252, 504, 475, 104, 6, 572, 546, 296, 102, 469, 113, 43, 175, 225, 58, 372, 215, 519, 345], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [101, 104, 175], [], [], [], [], [], [], [], [101, 104, 175], [101, 104, 175], [104], [], [], [101, 175], [101, 175], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [330, 75, 6, 546, 113], [], [], [], [], [], [], [330, 75, 6, 546, 113], [], [], [330, 75, 6, 546, 113], [], [], [], [330, 75, 6, 546, 113], [], [], [], [], [], [], [], [], [], [], [], [330, 75, 6, 546, 113], [], [], [], [], [], [], [], [330, 75, 6, 546, 113], [], [330, 75, 6, 546, 113], [], [330, 75, 6, 546, 113], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [314], [], [], [], [], [], [], [314], [], [], [], [], [], [314], [], [314], [], [314], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [389, 75, 351, 203, 504, 475], [], [], [], [], [], [], [389, 75, 351, 203, 504, 475], [], [], [], [], [], [], [], [389, 75, 351, 203, 504, 475], [], [389, 75, 351, 203, 504, 475], [], [389, 75, 351, 203, 504, 475], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [75], [], [], [], [], [], [], [75], [], [], [], [], [], [], [], [75], [], [75], [], [75], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [], [], [], [], [], [], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [], [572], [], [], [], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 343, 502, 229, 569, 594], [], [], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [], [452, 321, 371, 572, 343, 105, 502, 229, 102, 569, 225, 594, 596], [], [], [], [], [], [], [], [], [], [], [], [], [], [411, 93, 213, 557, 455, 433, 180, 357, 384], [], [], [], [], [], [], [411, 93, 213, 557, 455, 433, 180, 357, 384], [], [], [], [], [], [], [], [411, 93, 213, 557, 455, 433, 180, 357, 384], [411, 93, 213, 557, 455, 433, 180, 357, 384], [], [411, 93, 213, 557, 455, 433, 180, 357, 384], [], [411, 93, 213, 557, 455, 433, 180, 357, 384], [], [], [], [], [], [], [], [], [], [], [], [], [], [213, 286, 418], [], [], [], [], [], [], [213, 286, 418], [], [], [], [], [], [], [], [213, 286, 418], [213, 286, 418], [], [213, 286, 418], [], [213, 286, 418], [], [], [], [], [], [], [], [], [], [], [], [], [], [213], [], [], [], [], [], [], [213], [], [], [], [], [], [], [], [213], [213], [], [213], [], [213], [], [], [], [], [], [], [], [], [], [], [], [], [], [213], [], [], [], [], [], [], [213], [], [], [], [], [213], [], [], [], [], [], [], [], [213], [], [213], [], [], [213], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [511, 47, 86, 37], [], [], [], [], [], [], [], [], [511, 47, 86, 37], [], [], [], [], [], [], [], [], [], [], [], [], [], [411, 93, 557, 455, 357, 384], [], [], [], [], [], [], [], [], [411, 93, 557, 455, 357, 384], [], [], [], [], [], [], [], [], [], [], [], [], [555, 499, 17, 582, 514, 567, 452, 471, 321, 46, 343, 502, 590, 591, 569, 185, 320, 545, 468, 374, 266, 571, 594, 579, 261, 52], [], [], [], [], [], [], [], [555, 499, 17, 582, 514, 567, 452, 471, 321, 46, 343, 502, 590, 591, 569, 185, 320, 545, 468, 374, 266, 571, 594, 579, 261, 52], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [570, 115, 340, 429, 480, 381, 530, 229, 405, 441, 508], [], [], [], [], [], [], [570, 115, 340, 429, 480, 381, 530, 229, 405, 441, 508], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [439, 335], [], [], [], [], [], [], [439, 335], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [570, 429, 514, 359, 381, 229, 320, 468, 266, 86, 441, 37, 508], [], [], [], [], [], [], [570, 429, 514, 359, 381, 229, 320, 468, 266, 86, 441, 37, 508], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [528, 474, 530], [], [], [], [], [], [], [528, 474, 530], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [17], [], [], [], [], [], [], [], [], [17], [17], [17], [], [17], [17], [], [17], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [17], [], [], [], [], [], [], [], [17], [17], [17], [], [17], [17], [], [17], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [96, 342, 136], [], [], [96, 342, 136], [96, 342, 136], [], [96, 342, 136], [], [96, 342, 136], [96, 342, 136], [96, 342, 136], [], [], [], [], [96, 342, 136], [], [96, 342, 136], [96, 342, 136], [], [96, 136], [], [], [96, 342, 136], [], [96, 342, 136], [], [96, 342, 136], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [136], [], [136], [], [], [136], [], [136], [136], [], [136], [], [], [], [], [], [], [], [], [], [], [], [], [136], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [96], [], [96], [], [], [96], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [96], [96], [96], [96], [], [96], [96], [96], [], [96], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [246, 510], [], [], [], [], [], [], [], [246, 510], [246, 510], [246, 510], [246, 510], [246, 510], [246, 510], [246, 510], [246], [], [510], [], [], []]