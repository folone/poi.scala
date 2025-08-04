window.BENCHMARK_DATA = {
  "lastUpdate": 1754321889362,
  "repoUrl": "https://github.com/folone/poi.scala",
  "entries": {
    "JMH Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "d5b2e0df11b98a7efc5f64aa387643c68ddb110b",
          "message": "Hopefully final fix",
          "timestamp": "2025-08-04T15:07:25Z",
          "url": "https://github.com/folone/poi.scala/commit/d5b2e0df11b98a7efc5f64aa387643c68ddb110b"
        },
        "date": 1754320849997,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.81204422672688,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.1995631234250423,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.341664130656866,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.062906329211451,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023239119131428284,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8280003650062058,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07292250426563802,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2427083735554231,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.632698108880504,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21454120846078362,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.001355918783123,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0803929074314802,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08627176541301924,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 45.5324309415431,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4400629897162444,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13228563472773414,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 54.678183277442905,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16750789913245817,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5896424044913804,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.47826078355471136,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 54.09707204337136,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 632.2379852032537,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5313680634355149,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.404971336241225,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.448894214373158,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 627.6139657630631,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5276115439089473,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022952805574027617,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.760607941085844,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5127307419367717,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9289256999846659,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.443179956719852,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02162833017718292,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.229641514209197,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.508350033101005,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.018140974431051442,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.030406640489994,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7476048085092457,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.031907109509125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01622267854656613,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015610726674086916,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8749532068554682,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023146126695188916,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.80005852120804,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001444092104778977,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.834701380809592,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.455460666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 28.670471666666668,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "d5b2e0df11b98a7efc5f64aa387643c68ddb110b",
          "message": "Hopefully final fix",
          "timestamp": "2025-08-04T15:07:25Z",
          "url": "https://github.com/folone/poi.scala/commit/d5b2e0df11b98a7efc5f64aa387643c68ddb110b"
        },
        "date": 1754320855973,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.78280378278438,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.292230400857421,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.889015818704431,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.104605011713241,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022603666733034745,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.841718724611139,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0709407125296939,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24289104294555058,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.19970756970162,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.20022565808909115,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8440623643432494,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0656769017977137,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09023441876726193,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.593295118489415,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.31766813686438516,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13234157191067147,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.171148850953315,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16697128022900265,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.577827045191096,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4998989589633377,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.0508745854338,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 592.8615901216854,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5224925115936123,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.7273344767209,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.32185701275613476,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 722.083261711819,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5372210012532348,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.024584789096652758,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.9098508934428295,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5514768585951213,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9633058793932905,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.255673197135682,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021498823423187326,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.40961860404306,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.523004929966445,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019321418853246432,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.844600715885707,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6605511817447192,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0160704851614524,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016222732995647464,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016242884722607453,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8806624835702703,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02290711935002248,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3450589442466856,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016118128956140853,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8396426209982664,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 27.681671999999995,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 37.30998533333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "bbb7a6299ea5d758dc8da20d43cfae7730f3c4a9",
          "message": "On-master merge comment.",
          "timestamp": "2025-08-04T15:29:40Z",
          "url": "https://github.com/folone/poi.scala/commit/bbb7a6299ea5d758dc8da20d43cfae7730f3c4a9"
        },
        "date": 1754321802221,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.3371551202108,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.1662930582793587,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.853220693934327,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.047000093785755,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023322104161705694,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8258711884698563,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07633982337579284,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24825024201591547,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.02365827326507,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2217940060629408,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7916630442702697,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1135495612580462,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09035663454351499,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.669039488673846,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3612615752784141,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14779900805107984,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.88011590077941,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1700332435685905,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5854137207754998,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4994496040667129,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.896384702475736,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 669.1683085229503,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5341842057211812,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.58680975952429,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3495415134210821,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 641.7579698842362,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5517478822422932,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023430093361057135,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.41577971502687,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5174398119471391,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8978747687410733,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.107957382759462,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02288072685907807,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.8662489694754916,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.913913799841166,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019560194236520886,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.7459416448874885,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6801759910902525,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0571579835449083,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021211063548246083,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015102286924664966,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8631999491450522,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021517032690000982,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.515122978945552,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015153161184251582,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9538409133483676,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 27.579378333333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 34.11404733333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "bbb7a6299ea5d758dc8da20d43cfae7730f3c4a9",
          "message": "On-master merge comment.",
          "timestamp": "2025-08-04T15:29:40Z",
          "url": "https://github.com/folone/poi.scala/commit/bbb7a6299ea5d758dc8da20d43cfae7730f3c4a9"
        },
        "date": 1754321834862,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.41082155144876,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2227226824421407,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.577919665531713,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.111323070361282,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.024197732250453585,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8139185037418208,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07675513958888988,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2399371858484547,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.26250613995937,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22215013340710085,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.883348475641062,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0566925951848885,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08974775170690062,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.23337046714241,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4014013601751828,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1448298870945562,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.13899615735771,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17419435745353798,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6021408588496842,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4928865150153922,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.70086229583497,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 647.0750547316927,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5309673353378291,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.48334794997833,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4126552028092262,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 703.8107410044435,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5315274029167442,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023166084135796627,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.450193088079248,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5484099907638608,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9416149893222145,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.101429407057386,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02159924376646164,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.5258433144755026,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.715159908503589,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022625209719607887,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.945729895006355,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6922632415167178,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0081053012776935,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016657252992031833,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015935063855581834,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8705966959696358,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021587056689742406,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.378082742218895,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015762875768400545,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8515314061002617,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.34649333333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.948593000000002,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "bbb7a6299ea5d758dc8da20d43cfae7730f3c4a9",
          "message": "On-master merge comment.",
          "timestamp": "2025-08-04T15:29:40Z",
          "url": "https://github.com/folone/poi.scala/commit/bbb7a6299ea5d758dc8da20d43cfae7730f3c4a9"
        },
        "date": 1754321888995,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.590638572439275,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2290241393132426,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.26223416622878,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.129112189315322,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022752281872792653,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8335681619779546,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07484641414445212,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23694272659319643,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.321938905919936,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21648646020103599,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9497886232686863,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0475157132735655,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09049358414550854,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.48953123683765,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.48294468780061833,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14042742552711612,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.76442560554481,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1714509300273458,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5903178203563748,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4877782928993778,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.260284089192545,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 704.6040572746638,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5368196342906538,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.62141115118125,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4373899356148104,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 666.7599275584065,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5082932794027781,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023123093580548783,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.592338696329665,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.529441586480299,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9190469872640632,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.297256232897109,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02146937074500023,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.6009729670881336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.91172080566601,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019903587162489984,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.939360215599083,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6953995432806874,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0463439969442296,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01604501363160571,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014431478860439182,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9236373195651715,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021633870760631887,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 3.2553759152684685,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014885566177913628,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8912219173143483,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.508177333333332,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 28.605969,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}