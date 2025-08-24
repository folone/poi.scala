window.BENCHMARK_DATA = {
  "lastUpdate": 1756070519298,
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
        "date": 1754322165576,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.528345932648946,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.231308071401653,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.849802084947385,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.183591234068256,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02311539619151482,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8344182171218855,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07459668387436152,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23624160063826344,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 39.39009668692235,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22048323892167704,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8252313843722099,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.084655410829248,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08976208066657139,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.4462013125734,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.39003295359650353,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14697290780022726,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.06598742660009,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1735897454206725,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.596114361470184,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.506656386809927,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.568201722382256,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 673.5304877099145,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5310561724042955,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.66259214083574,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4089270362449181,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 694.1716727793325,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5421257085311035,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.025263676698038962,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.623398342060253,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5457594525060391,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.913217669392915,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.089200569807408,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021385732897306414,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1325109457435452,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.892894361464914,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01970031158403407,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.7326488680532925,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7579216963949236,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0400371805291724,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016559628538048033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016122435234543387,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8885821542414774,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02288823883361827,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.604138398291673,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016475459803229249,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8323414184964513,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.977462666666668,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.412254333333333,
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
        "date": 1754322224863,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.204976134093116,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2753626650827234,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.766877174103708,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.32482838086416,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023041536809474267,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8182567761160902,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07517941401327102,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24097373918894335,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.23636820939121,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.20763602729084457,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8604659522653866,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0924236185121685,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08484045275249848,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.561080163749565,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.424885981598947,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.12574077824755475,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.535151499144646,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16423377345435292,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5974186794486636,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5027584732755808,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.853946513282775,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 595.5410781653752,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5217062756301853,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.446491785187476,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4283056775641584,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 698.8234570892105,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5359710344921207,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022795115480673023,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.566989849112821,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4974931080768461,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9403642168816262,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.121292555067154,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021505109428766288,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.379285499861159,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.761975806883962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.025072338666312873,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.042076591106413,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.674195690889747,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0728320538728826,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016466317546664288,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015594219893994641,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8549328268727958,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02141798399365956,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.540415578010918,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014401334545477594,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.95302538488697,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 19.059974666666665,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 25.431959333333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "463d330a40b278f449b7cd82a8815d837d63abd8",
          "message": "Update discipline-specs2 to 1.5.0 (#340)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-04T15:44:29Z",
          "url": "https://github.com/folone/poi.scala/commit/463d330a40b278f449b7cd82a8815d837d63abd8"
        },
        "date": 1754323053907,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.42118932950591,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.217063010376835,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.060933622666429,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 3.9564915345798255,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023215873728983948,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7991022757253112,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07639102937289419,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24909581266864578,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.897750427752634,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2238662299546478,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9305211133714013,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1050476042986621,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09000977023789312,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.49423496445454,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.44133702050197965,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14683008965571237,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.848436514845844,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.170584496991856,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5775266819259783,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.497896346746827,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.008168784378576,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 637.5909370571887,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5276914203301339,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.3911316826336,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.42840076978512276,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 634.8318166522733,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.543208173008012,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02334964858252903,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.468908655260475,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5545317874478048,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9085085856986798,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.383228427297983,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021421283962796876,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.7246905619817636,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.863183228057467,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017843690573833074,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.8401887640557035,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.749886061631146,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0250524628578352,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016293372274888352,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015442429023132594,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8986989327015507,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021505318215591228,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 3.3440667609196026,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001479520809992831,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8386468116541894,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.553002666666668,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.241763000000002,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "463d330a40b278f449b7cd82a8815d837d63abd8",
          "message": "Update discipline-specs2 to 1.5.0 (#340)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-04T15:44:29Z",
          "url": "https://github.com/folone/poi.scala/commit/463d330a40b278f449b7cd82a8815d837d63abd8"
        },
        "date": 1754328951119,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.001452753149934,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2294863666340567,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.397447599933978,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.297662736414426,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022271145761048904,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8046927111061816,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07386714856345022,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24699703119693428,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.606563631031975,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2275698301967648,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8121661518833996,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.090874914614813,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0915715592654393,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 30.249047663531353,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.41225854649583515,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14652986750534666,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 54.95743344494919,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17480437941067964,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.57345938865288,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4961170159958758,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.563829759252926,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 677.7555295298396,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5418549300966113,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.48561471883367,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3585208055210637,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 631.725253306959,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5206187855465407,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023292766948570444,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.436082942505541,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5036808059592378,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.925262663234842,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.947414894151011,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02151175704001905,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4760341723977386,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.907860148771848,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017628126625329827,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.795461978572389,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6904402759284802,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9768369842285494,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017845274699890036,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001674339956315437,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8760334317615346,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02148868903874536,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.5129411330252394,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015657541347468124,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9065340198700909,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 20.340355666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.270638,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "11c2c6562d40eb533e75937c8e0530d320fd71ac",
          "message": "Update cats-effect to 3.6.3 (#343)",
          "timestamp": "2025-08-04T18:42:23Z",
          "url": "https://github.com/folone/poi.scala/commit/11c2c6562d40eb533e75937c8e0530d320fd71ac"
        },
        "date": 1754333769187,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.96410220405194,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2746250948996085,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.884560972554567,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.188456645799184,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02274868906573977,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.801218749751164,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07115588815742604,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23691408394606966,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.486080603586565,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2210930222887459,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.022338834594381,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1023234100338533,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09108402458374516,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.55776553999977,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.36497817794994714,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14692592286432576,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.554180970111226,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17380535942149472,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6050413578294743,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5097746505696061,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.48419319558029,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 610.3486000304787,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5146567005562299,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 45.58142525071102,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4742414432678923,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 677.6193321764638,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5286140881531836,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02298085462243419,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.309205667176309,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5116858221269888,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9564660093745108,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.983876837434305,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022902775827773295,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.154682989425651,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.746295547578555,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01960824495183692,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.9624780500607315,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6751532538165381,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9750751096570736,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016187583307422898,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001579165326530708,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8650422831769364,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022990676693759267,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.562864465004655,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015668528154205979,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9035969437858267,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 47.18519366666666,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 28.061280999999997,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "11c2c6562d40eb533e75937c8e0530d320fd71ac",
          "message": "Update cats-effect to 3.6.3 (#343)",
          "timestamp": "2025-08-04T18:42:23Z",
          "url": "https://github.com/folone/poi.scala/commit/11c2c6562d40eb533e75937c8e0530d320fd71ac"
        },
        "date": 1754402028609,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.81208220627714,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2319366461273353,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.18403345340912,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.168267014818401,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02282672005543516,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8065799867690047,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07521268334077413,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24435022789299027,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.18960700881177,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22466387013944464,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0151851460386387,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1170595807901873,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08962409841992093,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.38892428069189,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3851231886209184,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14440125306604204,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.83357742406982,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17034500543017508,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5833605891368512,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5030293068694685,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 47.24801202504846,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 650.2629972701139,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5348514534096328,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.56608698462752,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3286237139501279,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 679.894215390016,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.510544216755821,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023303737445356677,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.460653409516074,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5102018478547322,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9165864432133599,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.07843062267948,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02154481956631969,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.8961570003117396,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.843967943844585,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017872929119585507,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.8344111550716,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7323668285436888,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0047270734642213,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01644346847314123,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014560590807282763,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8553943771913801,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02176151888662651,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.8931139776235426,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016361112359226365,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8215391102478466,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.84609233333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.99384433333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "950c2f8c9d010b7bf7daf2c2e54c905380fde726",
          "message": "Update sbt-bloop to 2.0.13 (#344)",
          "timestamp": "2025-08-07T11:49:16Z",
          "url": "https://github.com/folone/poi.scala/commit/950c2f8c9d010b7bf7daf2c2e54c905380fde726"
        },
        "date": 1754568176377,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.18274533572215,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.249482189045578,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.859957611544981,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.161247043613676,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02293704509276915,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8339399868634786,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07063312910453423,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2386090998246929,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.005488592769986,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21889413377910327,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9002693307452225,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0885201389763934,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0900154499459402,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.91353308945964,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4003279486940932,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14430009647904524,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.882080777266204,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16918712630969676,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6035373554705219,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49057691005489,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.67825107991213,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 627.0705096668644,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5173095120828111,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.049035407293346,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.31690858017651835,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 680.5691100914761,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5339033156777726,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022648067957638008,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.633253034149879,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5029999908467768,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9162426896262472,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.155222415300255,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022935535040825898,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3481384813197232,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.533946487952578,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017735094426376004,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.8499154786175716,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6809471695412899,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0005021601268975,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016595576943443213,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001551825612989739,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8978511713846467,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021475858059482857,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.9235264792669655,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014298680461735393,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8863620190429509,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.16075066666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.697038666666668,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "950c2f8c9d010b7bf7daf2c2e54c905380fde726",
          "message": "Update sbt-bloop to 2.0.13 (#344)",
          "timestamp": "2025-08-07T11:49:16Z",
          "url": "https://github.com/folone/poi.scala/commit/950c2f8c9d010b7bf7daf2c2e54c905380fde726"
        },
        "date": 1754872051699,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.198066192178224,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2648914726881588,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.907382297379698,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.030654031964,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02378828777919727,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.842949551119697,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07673536023393893,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24615598353748053,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.84502324021935,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23051778785864085,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8597356400764369,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0552211906608113,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08932633090360499,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.48082734198512,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.37310001540966375,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.15069350262931389,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.768846895151356,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1704662161430391,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5782868553545774,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4995830035544085,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.630843549659836,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 682.1510683454205,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5358839526242714,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.22071573844573,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3459107593029033,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 700.8368817664832,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5273661685647495,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023097166342874138,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.47081867395395,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5206569677289498,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9202840409749132,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.016508840571747,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021367314372771302,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.793708203547353,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.756007402036095,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01925914162936948,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.844380031450692,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6655662722527336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0186394751758785,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016212771154571946,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015405079380702263,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8711894169993553,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02139715860284254,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3211109256422207,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014876940565003356,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.82220150088922,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.48746866666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.020752333333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "009a87515fab31dadb3f9ebe93c3f9a09e9e53d6",
          "message": "Bump actions/download-artifact from 4 to 5\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2025-08-11T00:14:22Z",
          "url": "https://github.com/folone/poi.scala/commit/009a87515fab31dadb3f9ebe93c3f9a09e9e53d6"
        },
        "date": 1754971068338,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.5651389466293,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2132120693976853,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.654518435498812,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.2172041407173175,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023058244938319674,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8456904431326727,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07227750149210649,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23888028534483477,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.50722378442082,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22741008679325697,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.029423506705996,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0663021656304343,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0903651948498492,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.54414804660355,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3298735818933808,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1449466317854204,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.74921790370627,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16786755356434474,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6105219447544961,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5011805420438933,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.66256058738041,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 626.7723728123616,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5336224818159446,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.31847734150063,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.389220495969436,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 682.3043508603477,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5418567608435837,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022851749199587372,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.321664093305981,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5023043115391388,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.932822181872214,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.937040950778968,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021420229486111927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.126020517370579,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.688494367673289,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017750516171270027,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.79540339436872,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6838557182359246,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.050855562061405,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016168802134629505,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015929616585004399,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8877439991263576,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021793409676077263,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.5965060829345497,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0013908335683315463,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.897016195589197,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 29.629461333333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.96001666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "009a87515fab31dadb3f9ebe93c3f9a09e9e53d6",
          "message": "Bump actions/download-artifact from 4 to 5\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2025-08-11T00:14:22Z",
          "url": "https://github.com/folone/poi.scala/commit/009a87515fab31dadb3f9ebe93c3f9a09e9e53d6"
        },
        "date": 1755415907309,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.647831301995765,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.244875793165707,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.553138648708535,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.220900850971166,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022194741617210984,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7850593368339975,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.071732777956767,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23904408359209942,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.69733776468108,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22782286710634633,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.01350865211271,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0841299520707612,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08947547440221527,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 47.05133718151603,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3551560841393483,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1329159345904695,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.82549956641172,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17177824582414228,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5921425718462501,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49738312576865934,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.7798299526349,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 630.8245542957004,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5454574444195555,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.45430080695391,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1349099442597189,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 696.5341804444442,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.536617979783102,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023234069957221864,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.386543032858694,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5186899473863875,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8999756658710861,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.118877122323058,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021549198306167014,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.2008915958282707,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.829800310702448,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01765304846345072,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.71382559141857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7440211738053217,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0500018212855338,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016206261338757987,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001560512448858202,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8541446721725443,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021553570849050935,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.228646950011668,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015071108314855953,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.90252019206152,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 14.085540666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 28.257322666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "009a87515fab31dadb3f9ebe93c3f9a09e9e53d6",
          "message": "Bump actions/download-artifact from 4 to 5\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2025-08-11T00:14:22Z",
          "url": "https://github.com/folone/poi.scala/commit/009a87515fab31dadb3f9ebe93c3f9a09e9e53d6"
        },
        "date": 1755476520982,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.69064113716625,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.1834757829147247,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 12.939400235548439,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 3.916831223181935,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023505707044695023,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8557542477056195,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07300797360758356,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2524108508442085,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.39280263157558,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22622420880951735,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.975757717681633,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0806159516717044,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0915053399379535,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.36480664448125,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4629788795285438,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14897797898309822,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.98295124964718,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17104592574584992,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.60057507331455,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49722874264424705,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 39.30423278362953,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 696.1910343088523,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5342466509831129,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.72293738618544,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3747395351571102,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 674.0413558563914,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5293853809861577,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02307595487365865,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.390088531780359,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5057611694053475,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9567295101747296,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.794329666518705,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02146661897832896,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.531580018362347,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.834526925319169,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021422262041713717,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.880236062817338,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6646634624438459,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.03923334125788,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01632507489503502,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015689629268040538,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8710530235842444,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02302218964438898,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.594153387495126,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001549554301977491,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8558564851207398,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.094872999999996,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 19.603294333333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "436b134aa3bd48e3d3d5d553ee7b107836791f87",
          "message": "Bump actions/checkout from 4 to 5 (#347)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 5.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-18T09:38:34Z",
          "url": "https://github.com/folone/poi.scala/commit/436b134aa3bd48e3d3d5d553ee7b107836791f87"
        },
        "date": 1755510688192,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 41.4079751459288,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2086679304187133,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 12.670975028453805,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 3.9864947539838385,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023817026210400546,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8123177749930501,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07381744663207548,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24696892154756625,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.23064444887414,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21650373447823723,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9176282182211986,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0758118574410493,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09049024713734295,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.688129478665346,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.37760558612707634,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14328496606312685,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.10839668242069,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17184919471902102,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6030159060537763,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49437531409121405,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.620027061949564,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 656.674969247674,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5347970665481381,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.191495116951984,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.40225519998383835,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 669.3240838935828,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5411280152346005,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022672116429490782,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.372653454062783,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.549425633135754,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9471616103287115,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.541288789981714,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022846200276862075,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.285950196951164,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.8407511985419855,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01984585281213396,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.8597785278515016,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7008026744668001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.017737444468499,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01618184565501018,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016183266730260993,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9170227231211932,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022966512321666722,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.290016952712875,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015183003569699928,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8308221164443037,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.169844666666666,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 27.824494,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "436b134aa3bd48e3d3d5d553ee7b107836791f87",
          "message": "Bump actions/checkout from 4 to 5 (#347)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 5.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-18T09:38:34Z",
          "url": "https://github.com/folone/poi.scala/commit/436b134aa3bd48e3d3d5d553ee7b107836791f87"
        },
        "date": 1755510721130,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.54756581505497,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2283608413034006,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.283106192323396,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.217986046902252,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022760386651790854,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.835463365815168,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07187470617616737,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2399555780035442,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.19325878704391,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2197155710058524,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8393111202183783,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0678654626735404,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.089969544973651,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.66838916409236,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2820620081991458,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1463764510155094,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.821134877262885,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17190331790624783,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5898150996189377,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5068719255495311,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.07648848981664,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 653.8398928822237,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5307420992586466,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.571741989797836,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3446645933612983,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 627.5325438996686,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.525882742307557,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02382302539271749,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.620290250664793,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5417948910978855,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8952607560435208,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.361685190908192,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021456249759873234,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.7190330044661053,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.693964925208053,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017657993464892514,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.818948159037836,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6246839980429784,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0297103192137778,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016464461950143266,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015190416019595448,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.908877045292341,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021479056775550544,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.573706435882256,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014059929748061674,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8712099676461982,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 18.243063333333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 27.041463000000004,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "436b134aa3bd48e3d3d5d553ee7b107836791f87",
          "message": "Bump actions/checkout from 4 to 5 (#347)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 5.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-18T09:38:34Z",
          "url": "https://github.com/folone/poi.scala/commit/436b134aa3bd48e3d3d5d553ee7b107836791f87"
        },
        "date": 1756070518853,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 41.883674010916764,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2531835371349156,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 12.772169880583396,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.1525078694621875,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02381349006664756,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8059067545649519,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07476510508835366,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.25117709717911163,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.26480002684584,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22625265860378452,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8887346513872358,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1010054896890744,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09035204446214604,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.31759035945736,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4453357583607887,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13947817019231162,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.1316349744367,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1704638340916367,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5842419818176013,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5028336524106841,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.7376427443654,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 672.5310540011839,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5290847584827768,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.61311064570864,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3665105518238186,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 674.2644391753478,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5270557113754653,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022960999748843695,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.688056387422767,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5310522720880522,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9372623459529347,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.31890625663115,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02146410675518246,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.318374977122189,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.028255699842886,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017774843201003573,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.826188386301923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7058293040246366,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9799329328613546,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01650467528116223,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015860169675671336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8600225892348061,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021438118461209178,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.46507850370142,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014759143474389414,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8798176691498134,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.416777666666665,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 29.414236666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}