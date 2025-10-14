window.BENCHMARK_DATA = {
  "lastUpdate": 1760431330098,
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
        "date": 1756081195144,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.79852397914472,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.196217240142487,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 12.992951728276177,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.043576972967722,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02381965885708713,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8162116052428212,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07392593936740471,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24254132877858786,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.227876505295434,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22340711998188012,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9201508347117868,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0618389496453973,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09043848791767044,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.57859186138178,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.45877483549361264,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1490258108369384,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 52.02293289541478,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16999304518247962,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5947739787461456,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4928046885479821,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.847096148932565,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 645.7458803312253,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.533523736825272,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.48349748653695,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4038303715872226,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 681.5633976673478,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.538424917991439,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022968087469426614,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.402300296749432,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5342248045761113,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9011423995227155,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.0417127728951,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021437292177899487,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.2434464196843367,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.943206561921772,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017883882175894282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.885801006134169,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.725954139216077,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9937958000816711,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016311583151001997,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015424902442578814,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.897330887448146,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02143512717817047,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.5934855557052447,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014048037592420096,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8591840808461892,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.70642133333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.855673333333332,
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
          "id": "47b7bf5ef1e5f3cebfa9568adaac1fd66cfcf1cc",
          "message": "Bump actions/setup-java from 4 to 5 (#349)\n\nBumps [actions/setup-java](https://github.com/actions/setup-java) from 4 to 5.\n- [Release notes](https://github.com/actions/setup-java/releases)\n- [Commits](https://github.com/actions/setup-java/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-java\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-27T09:45:45Z",
          "url": "https://github.com/folone/poi.scala/commit/47b7bf5ef1e5f3cebfa9568adaac1fd66cfcf1cc"
        },
        "date": 1756288716893,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.387554332154856,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2448351335163421,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.066071130635791,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.270205445367816,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022964625238408982,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8169324870236633,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07612054809028784,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23935031623090314,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.833424588243446,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22929178862305663,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9287745907371616,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.087018712978044,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08935087920052429,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.66183785162961,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.28785434021595324,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13660054314188622,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.55968044148203,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17262727420250631,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6019017778528734,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4855546182497342,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.59945459581296,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 634.7053118001406,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5345408127014696,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.659207326487476,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4082031085494192,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 675.0730961683479,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5456438721698247,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022774392600912356,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.343799970747625,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5218728414565486,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8963012175576284,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.745216053900709,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02145653143813883,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.275808218641587,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.855840092689341,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019537890401839984,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.802150301797185,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.757024145042514,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.020897350318813,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016405013762027507,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014668663160452857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9094162884369124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02143229591725613,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.384046053848821,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015367598073695176,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9150482790176802,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 32.07264966666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 28.368869333333336,
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
          "id": "47b7bf5ef1e5f3cebfa9568adaac1fd66cfcf1cc",
          "message": "Bump actions/setup-java from 4 to 5 (#349)\n\nBumps [actions/setup-java](https://github.com/actions/setup-java) from 4 to 5.\n- [Release notes](https://github.com/actions/setup-java/releases)\n- [Commits](https://github.com/actions/setup-java/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-java\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-27T09:45:45Z",
          "url": "https://github.com/folone/poi.scala/commit/47b7bf5ef1e5f3cebfa9568adaac1fd66cfcf1cc"
        },
        "date": 1756288778428,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.10471058009175,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.1699337223639974,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.489188183826249,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.172083748487544,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02264354612960409,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8042549083311812,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07725806064779,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23649867775521827,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.07339200644081,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22972524427971344,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8526233576171904,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.121164043307263,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09067538684046653,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.54899750882604,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4005934397332032,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14561687082763147,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.17318794077664,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.169171023741641,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6120202500630418,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5024202989220736,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.51994827299626,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 631.1662548633619,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5265470383059431,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.39946035948546,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3703369416313871,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 652.2352536856702,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5259952475102485,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023140006721335184,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.305037995558746,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4946705460015292,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.933618406410444,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.231525367490635,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02298769835094049,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4005303370851734,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.454239670735214,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01788205945804997,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.782845041774361,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.67756882181503,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.989014689400244,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01788268714603852,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014806907784359984,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8653666836372609,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021786090136850754,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.949951348754175,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015178468668248471,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8644855075708626,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 17.764408333333332,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.435404666666667,
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
          "id": "9e6dd1a363b057bf45168227d44d4fcc2cc62295",
          "message": "Update sbt, scripted-plugin to 1.11.5 (#348)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-27T10:00:48Z",
          "url": "https://github.com/folone/poi.scala/commit/9e6dd1a363b057bf45168227d44d4fcc2cc62295"
        },
        "date": 1756290043933,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.78672327964809,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2370826204575207,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.811276070925421,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.266222293272131,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023154836241147427,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7944603146811018,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07246673746456285,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2365439150498437,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.46921830176038,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22223375935273298,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9530891071193086,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0799529898821612,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08702125869495941,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.25981465878637,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.40784474732990567,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13817015691476278,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.80593941630643,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1683466197547256,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5712549172257794,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4959737589277881,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.63483287401473,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 647.5387083817643,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5261927876531611,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.52461164860121,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4557530798902456,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 678.7962405462066,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5275873131061817,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023385486320916145,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.653191029976969,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5109913627460402,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9128502933141505,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.00293442906259,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02160712544854439,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.099571669553997,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.846934962710546,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01791709036920647,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.831651529041428,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.678149977358259,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0327415411393894,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016509189311496492,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016295924374946547,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.886709125933185,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021775632795680445,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4877430035165222,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015862112132532605,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8412106085398807,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.297904666666668,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.660460999999998,
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
          "id": "9e6dd1a363b057bf45168227d44d4fcc2cc62295",
          "message": "Update sbt, scripted-plugin to 1.11.5 (#348)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-27T10:00:48Z",
          "url": "https://github.com/folone/poi.scala/commit/9e6dd1a363b057bf45168227d44d4fcc2cc62295"
        },
        "date": 1757193329248,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.31991518246142,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2635202848377898,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.614607206380985,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.029597337920125,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022889640324331023,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7906716354823836,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07294840914052698,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2450629958377848,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.54864798832014,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22700116165920808,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.925037708248355,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0768455196895375,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09031722915177981,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 31.203962230007733,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.39389393963060454,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.15081080750103776,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.92949732784721,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1728036074025036,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.595642427038468,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5056667154669097,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.0980021695044,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 638.1674543673039,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5350158818031898,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.72795458974076,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.37927451613441615,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 668.9985778664966,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5390296721533945,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022708981584564306,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.5300117563435744,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5020675262749364,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9094577946741864,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.054933513675104,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022841548774607083,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.5923251592425074,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.848941657450377,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01784454750635775,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.818952390349502,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6189833909199336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9760152146294172,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019098901163908538,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015591995360780548,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8659444991079095,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022912216018254196,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3458339559045265,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014948153918065783,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9002419236646753,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.90907833333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.171779333333333,
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
          "id": "9e6dd1a363b057bf45168227d44d4fcc2cc62295",
          "message": "Update sbt, scripted-plugin to 1.11.5 (#348)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-27T10:00:48Z",
          "url": "https://github.com/folone/poi.scala/commit/9e6dd1a363b057bf45168227d44d4fcc2cc62295"
        },
        "date": 1757201006520,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.706187230016546,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2349792263579105,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.321590983115158,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.156058290846121,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023207365985052523,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8107613935599977,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07097580584260386,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2430886654571335,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.824573886245716,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22038217863945891,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9132866525660028,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1174602688459978,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09091615207588948,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.68385705867923,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.40890489580700085,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13955477157460797,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.70245575453898,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.15267954529036834,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5708574673147652,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4888006000314481,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.77265430312813,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 661.9192031787438,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5218079632433278,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.44916431641076,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.38473037435393964,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 660.7314150230884,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5371279763762207,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023021885233929198,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.497583298998249,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5288578553518235,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9253234645596212,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.279430408488285,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02154858181715787,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.2553109732309173,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.905370502979844,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019462099222147956,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.7987445894925305,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6715275394575997,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0406394254438966,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016505736549230703,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001569049268748357,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8810108648134674,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021505353472725214,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.514950880945649,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014328713930449842,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8546787655622787,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.525349000000002,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.126366333333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "7f5bde0e8f4f8a84cf715ea0764e3dca7c040c4d",
          "message": "Update sbt, scripted-plugin to 1.11.6",
          "timestamp": "2025-09-06T23:09:31Z",
          "url": "https://github.com/folone/poi.scala/commit/7f5bde0e8f4f8a84cf715ea0764e3dca7c040c4d"
        },
        "date": 1757204348991,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.80292744137019,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2407860861233424,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.82976204201322,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.002761439443634,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02320443716347561,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8132013967870672,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07533668564508482,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24640163482125335,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.05007645046904,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22274726832593306,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.952585598338588,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1006590388978905,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09070420732696977,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.74392502989682,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.39035728895622485,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.15119570361877638,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.30777248237477,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17002993131709002,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5975923138149086,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5009277684493123,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 38.12702056163024,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 646.2158770913187,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5345353252402428,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 45.55957728336304,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3641280085980886,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 667.9385884599044,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5385624694503442,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022849636181887206,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.461527874664194,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5425015636289517,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8979702048973361,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.156825755030525,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021466337370628148,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3612355619744183,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.293322213545965,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017774950449957735,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.905438752673024,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6788583743294958,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0079274126265463,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01642954916849891,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015367832368175737,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.899960353583544,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02284740232686646,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.546361670802847,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014160264700616358,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.818323097815376,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.804181,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.680185333333338,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "0cf1561d6c2cab754f24c5fc05c322fa52fe3cca",
          "message": "Update scalacheck to 1.19.0",
          "timestamp": "2025-09-06T21:02:25Z",
          "url": "https://github.com/folone/poi.scala/commit/0cf1561d6c2cab754f24c5fc05c322fa52fe3cca"
        },
        "date": 1757627165606,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.884235255335675,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2436648525431493,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.023373902112525,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.238625425383094,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022811485663890123,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8066808889884154,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.08128335572794135,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24189307143914335,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.26972695776883,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22652289348520097,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.949506841285799,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1184596637396909,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09041323116677843,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.46048349945297,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2880927427699457,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14354885846681747,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.824148692085544,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17307388002342594,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.605455552772419,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4818536618818353,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.80499575276046,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 645.819402423803,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5242757840558229,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.73891231907511,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.46896469804083674,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 688.6651816055904,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5477534005588545,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023116425265716396,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.454246120317112,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5034883958207447,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8970679317624988,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.070490927985345,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02149518175446751,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4558332544507793,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.55384147385621,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017636502492222653,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.862288862625376,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6493742513369622,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.981655039650807,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016502137036470316,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015625699834136112,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.910484091515393,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02169934331775961,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.5004979279660544,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014659061245204182,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.814456502365497,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.195363999999998,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.985586333333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "0cf1561d6c2cab754f24c5fc05c322fa52fe3cca",
          "message": "Update scalacheck to 1.19.0",
          "timestamp": "2025-09-06T21:02:25Z",
          "url": "https://github.com/folone/poi.scala/commit/0cf1561d6c2cab754f24c5fc05c322fa52fe3cca"
        },
        "date": 1757971454945,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.101310175447615,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2013795893415753,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.451223517836999,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.088606856332291,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023244282319679406,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8364892385427429,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07076489201635731,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24446112599301442,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.81542886920368,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21791233126425297,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8701999538425553,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0607959882834392,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08894798827762891,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.68268174504846,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4275842626861377,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13398188210965886,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 53.92531907796206,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1702995327081864,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.559061283714046,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4840694641341535,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 53.9225723202217,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 646.718753539018,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5311377694643143,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.94618380277615,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.366127566082102,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 698.6998379299137,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5066230864442539,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023195490957987973,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.644760079875573,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5366579533437628,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.933559193900194,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.798102113132007,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021565617023253485,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.216904115624026,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.451846324474293,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01827341030132888,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.779028291185917,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.674696954461643,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.046256476032003,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01645501018563105,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015504928942644417,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8919158839972074,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021661402820377238,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4854308925470043,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014774760617464807,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8811136064176996,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.62357366666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 32.331194,
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
          "id": "1b7572412310d89bec71cebbe7608b508e81100d",
          "message": "Update scalafmt-core to 3.9.10 (#352)\n\n* Update scalafmt-core to 3.9.10\n\n* Reformat with scalafmt 3.9.10\n\nExecuted command: scalafmt --non-interactive\n\n* Add 'Reformat with scalafmt 3.9.10' to .git-blame-ignore-revs",
          "timestamp": "2025-09-21T14:14:38Z",
          "url": "https://github.com/folone/poi.scala/commit/1b7572412310d89bec71cebbe7608b508e81100d"
        },
        "date": 1758464871901,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.1947294785636,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2167154463355447,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.7083731365902,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.179981501264781,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02268328933589288,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8766469449898224,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07286021187681077,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24380809448168575,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.53217239717735,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.20623796241829062,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9329097046959838,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.100398134538819,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08631307017808416,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.64976903747732,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4041393381851918,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13897545693702484,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.02700732772215,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17195445318762034,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.594857800235157,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.500377678758994,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.50144166258754,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 641.5095208231853,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5378026298691706,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.651317259970206,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3561260974114247,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 688.1094064644057,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5299699152346353,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02339067069000513,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.693600802366487,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5233742627477376,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9282994593258425,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.0086437085133,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021435979979681462,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.427053236165797,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.609279194480867,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01787772352049074,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.882624484044479,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.768862914066728,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0314159616780953,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0164744107578814,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015793529482271418,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8979672111304915,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021441449747350412,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3228693652799026,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014607431006819112,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9575655932871967,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 29.741543333333336,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 125.837337,
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
          "id": "1b7572412310d89bec71cebbe7608b508e81100d",
          "message": "Update scalafmt-core to 3.9.10 (#352)\n\n* Update scalafmt-core to 3.9.10\n\n* Reformat with scalafmt 3.9.10\n\nExecuted command: scalafmt --non-interactive\n\n* Add 'Reformat with scalafmt 3.9.10' to .git-blame-ignore-revs",
          "timestamp": "2025-09-21T14:14:38Z",
          "url": "https://github.com/folone/poi.scala/commit/1b7572412310d89bec71cebbe7608b508e81100d"
        },
        "date": 1758540233545,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.99617247714896,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2140398475985823,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.663497455234396,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.233994566575978,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022717507151545017,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8346731067023677,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07227113748132144,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2366164883402476,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.18723310055826,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21579422738245793,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9442297517020541,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.053021532326125,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09083689493884343,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.67586115473477,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.422259550652156,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1350856978196837,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 52.09058702689157,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17037023099750184,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6013406335945202,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4850051503297562,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.79252508752747,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 663.9620832752717,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5348707318491446,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.56352602671329,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.39768220283481776,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 658.0112951113002,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5401058027251058,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02353932292382143,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.563938452609382,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5121328166835086,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9208817088774095,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.274959775530586,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022921876977066585,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.58197470298072,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.719787430271479,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019506642886321927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.731164776798403,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6988478926201047,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.023081123464477,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01619576510329507,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015754294774949055,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8972450108547705,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022832468939902408,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.324148762381662,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014656998838945775,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8360979353453621,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 29.135732000000004,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 25.339266999999996,
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
          "id": "22962fb7714a3bcdb022f0125c424ae88b75b533",
          "message": "Update sbt-bloop to 2.0.14 (#353)",
          "timestamp": "2025-09-23T14:51:50Z",
          "url": "https://github.com/folone/poi.scala/commit/22962fb7714a3bcdb022f0125c424ae88b75b533"
        },
        "date": 1758640039476,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.94491685521835,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.292434753428668,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.31723955471494,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.1947980728767105,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022924420610548054,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7826411940380561,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07416074525649927,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2387256577259352,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.95823822244218,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22081169004823922,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.937926564754504,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1015779588544399,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09047269147918449,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.74670632586769,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3956678569948822,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14143577700824353,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.672732567297786,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16873544828946105,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5974930779089203,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4854711248588468,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.76140677998609,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 635.9124356809559,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5242700391157602,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.53318899761628,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4299913007587562,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 650.1753053736314,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5395527462724526,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023634125784971004,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.618315340902134,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.511203742989188,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9024398301219282,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.032892447959677,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02136014255250687,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.7116889845007686,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.080345932253385,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017671049710414215,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.915577709166386,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.67148814801924,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9753133316149412,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016142700922460906,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015857500697688605,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8788342623513266,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0228818712492485,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.032211893057008,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001396649650075209,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8406936319065224,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 25.568106,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.263632,
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
          "id": "22962fb7714a3bcdb022f0125c424ae88b75b533",
          "message": "Update sbt-bloop to 2.0.14 (#353)",
          "timestamp": "2025-09-23T14:51:50Z",
          "url": "https://github.com/folone/poi.scala/commit/22962fb7714a3bcdb022f0125c424ae88b75b533"
        },
        "date": 1758799463111,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.89716780068234,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.1446972583456605,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.832908523666916,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.131960307399503,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02297622229369837,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8434173692830014,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07521761481124298,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23959690500803282,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.54656547217569,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22573825603574557,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9254040320239887,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1035810641612174,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09121784313189889,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.60278579359607,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3772295779247475,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13484045307268183,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.90644635160131,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1735047431288359,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.586992859313903,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4981182409293042,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.869332525706284,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 594.4309726656344,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5213721972410291,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.47073910025917,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.40785742031026667,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 686.0099864852531,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5552461816075833,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02292720912933603,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.4988878141414474,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5594241804215095,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9327767778370708,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.315400804384009,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021589321425563177,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.8328926039825624,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.292008593895863,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017690857221368563,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.780055614350394,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6644927735010953,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9888750496723957,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0179649137081598,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015628156046359927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.894541478399726,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021415569607748392,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.270807335799457,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015984556589991878,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8412266166371043,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.741303666666663,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.594939,
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
          "id": "047c16aa672ca5b811971dc3bb0545b8ee2aede4",
          "message": "Update specs2-scalacheck to 4.22.0 (#354)",
          "timestamp": "2025-09-25T18:09:26Z",
          "url": "https://github.com/folone/poi.scala/commit/047c16aa672ca5b811971dc3bb0545b8ee2aede4"
        },
        "date": 1758824592758,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.308427489494626,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2253278385124877,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.187219844818387,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.009736857003128,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023461714651544653,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8068694894737801,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07491496038233789,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24422565119657036,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.77936346390934,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2125529455385938,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.815821407912279,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0579182845229056,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09287328510603449,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.559207319246795,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4199496615244036,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1442517287319633,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.76914712181415,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16911436363845161,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5947574149466479,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5006102634359144,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.70431384642681,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 638.3238648794343,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5265581451252417,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.58783221208505,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.32063987185989073,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 680.4786301241379,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5466010934348426,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02307152645718001,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.5487499366762485,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5279291984530298,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9232457368939249,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.452791001257836,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021448777078886063,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.6869217034400856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.86133453924145,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017966554595956565,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.752192104748769,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.703123762152797,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0053231564803133,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016257309731025533,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015192158834986223,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.938153696300358,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021654259112142287,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 3.049530365069778,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014953768825898008,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8527343262625429,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 13.792030333333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.991290333333335,
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
          "id": "047c16aa672ca5b811971dc3bb0545b8ee2aede4",
          "message": "Update specs2-scalacheck to 4.22.0 (#354)",
          "timestamp": "2025-09-25T18:09:26Z",
          "url": "https://github.com/folone/poi.scala/commit/047c16aa672ca5b811971dc3bb0545b8ee2aede4"
        },
        "date": 1759138197485,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.23771982931557,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.1623022857009897,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.867164907212588,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.094165133514858,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023076188262348342,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8236825815295642,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0750173617217157,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23831867747409574,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.74931860238345,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22601224602196504,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0467417231623752,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.09251827207767,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09150845662426184,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.84455858869179,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.42642263580708145,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1435652152027868,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.61318283590042,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17195340474337623,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6037655219912406,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5064535521128752,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 62.428139164972436,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 632.2129003847557,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5314045783929984,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.33498543686883,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.34058736181407717,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 679.4930530223362,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5264685513360849,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.024004478941711354,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.064496805447223,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49860591656462566,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9433975903392573,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.059596843953123,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02165796594093774,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.368093172581066,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.43900304581102,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01804765063060317,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.983245438570713,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6716840227705085,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0189884480043747,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01649837827815627,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015984748151535784,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.855181138558238,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0216814859944257,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.6227662242119973,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014842570123789118,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8695710485066477,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.539642999999998,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.362746333333334,
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
          "id": "047c16aa672ca5b811971dc3bb0545b8ee2aede4",
          "message": "Update specs2-scalacheck to 4.22.0 (#354)",
          "timestamp": "2025-09-25T18:09:26Z",
          "url": "https://github.com/folone/poi.scala/commit/047c16aa672ca5b811971dc3bb0545b8ee2aede4"
        },
        "date": 1759224834123,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.65707085364822,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.324308233811327,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.735255241425255,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.23401495101699,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02162619698308247,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7869632834062298,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.06929085802372739,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.22932189689422575,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.35595208184789,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2224773489449261,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6379039331531349,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1564148252158972,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08762706993202503,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.863377528690116,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6592396190880008,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.11196380927282454,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.086361912570126,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16145181707536468,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6298414518909838,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4739633655836558,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.694616454108896,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 365.8096514254406,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5207915517257158,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 45.6143599376105,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6063985901919413,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 649.4240954941126,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5132047839774593,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.024269851949382838,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.137063325196029,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6267482702665574,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8468440450425694,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.188984238336008,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023043033772700793,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7909007031539363,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 8.430271591097963,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.018072128426791616,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.032942284493844,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.5835770840239287,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.063466662996709,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016495422040357637,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.002616615665258404,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8652837097429142,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021807668787990328,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3735406054998833,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015539400527651316,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8962354695301316,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 19.056662333333332,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.983405,
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
          "id": "047c16aa672ca5b811971dc3bb0545b8ee2aede4",
          "message": "Update specs2-scalacheck to 4.22.0 (#354)",
          "timestamp": "2025-09-25T18:09:26Z",
          "url": "https://github.com/folone/poi.scala/commit/047c16aa672ca5b811971dc3bb0545b8ee2aede4"
        },
        "date": 1759418731451,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.983566934621734,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.1782175176162855,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.724548825528547,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.0622674386595286,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022899338457775763,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8649057550059064,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07461262989570311,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24058245535735606,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.17430947593316,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22465536655079738,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9665973101452565,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1158200349509115,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0927940609781586,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.83296117565385,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4126129082441462,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1361721024227343,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.917089333229555,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17105142669109025,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5908785155059588,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4981192599196095,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.72738727253219,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 587.0640977576761,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5318022188332685,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.38004546645426,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.38005962839698426,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 670.240926824873,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5365646571804815,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02322277435702224,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.511020078136977,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5045602692768292,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8999849635147287,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.019413216889632,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02143747386461856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4697502661312205,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.993725676864803,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017611608344757126,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.87094941370485,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6858286859344571,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.97992963063026,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017427025467123224,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015649081041063991,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8957672500315215,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021510917764954694,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.530180994936029,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014385336063037772,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.960918968588194,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 27.925303,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 29.113895333333332,
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
          "id": "047c16aa672ca5b811971dc3bb0545b8ee2aede4",
          "message": "Update specs2-scalacheck to 4.22.0 (#354)",
          "timestamp": "2025-09-25T18:09:26Z",
          "url": "https://github.com/folone/poi.scala/commit/047c16aa672ca5b811971dc3bb0545b8ee2aede4"
        },
        "date": 1759499103338,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.87443463209205,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2557923369489656,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 12.866248536901605,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.2147858732488315,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02253720959218211,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8003140257129049,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07112141723154622,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2388960162662248,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.853254442757816,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23026981705576546,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8515205643011925,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.103078809149642,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09167987190458975,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.78634322771107,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3676234456683928,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1395628942216479,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 54.93725386395901,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17459170759839698,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5613474766984834,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49594939377912517,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.84673839414188,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 636.0742584061245,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5342330689689361,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.90440900977673,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4414576108368605,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 632.1700238725159,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5331623391795669,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023273177642023826,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.43934781747967,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.556930706397246,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8866824051438862,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.29500742435747,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021328752563327513,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.1130704927698276,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.693024738447427,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019233202384154685,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.963746479641436,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6973094110039202,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.074689595657657,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017812271900877426,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015565368224245587,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.878746619164796,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02162691693464488,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4242200850810285,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014378424828586655,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8852742114562155,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 16.400404333333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.472814333333332,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "e0aa796ed5b714abad940adec288dbfabf1facc3",
          "message": "Update sbt-jmh to 0.4.8",
          "timestamp": "2025-09-29T09:15:50Z",
          "url": "https://github.com/folone/poi.scala/commit/e0aa796ed5b714abad940adec288dbfabf1facc3"
        },
        "date": 1759534721602,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.26123749954479,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2777737092435004,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.108576182065224,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.194408123031296,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022871045956762724,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8161010861901394,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0751498564639816,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2423475622244753,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.681555706040186,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21979192144383947,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9853570194044363,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1062905827326859,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09101652578806786,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.72837104790207,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.37050153186842805,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1385378740277588,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.31494310238395,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17368315012954846,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6019437081702026,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5068894616129709,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.90194702481769,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 639.3376013414484,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5412570117227193,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.03647169878928,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.31513897881098385,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 641.0918731981712,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.539303784403692,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023090664373198087,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.580105715068662,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49605964605200514,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8871665027219873,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.960038755028668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.024112859709322962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.528678505308514,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.756006988921639,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017818961151029288,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.915427744901119,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6924734513547885,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.950802270748707,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017693533891389824,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015709173777028605,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8596438670334834,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02300788559213659,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.095116566247641,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0013741865712125778,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8589107876034028,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 28.547503333333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.249101333333332,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "e0aa796ed5b714abad940adec288dbfabf1facc3",
          "message": "Update sbt-jmh to 0.4.8",
          "timestamp": "2025-09-29T09:15:50Z",
          "url": "https://github.com/folone/poi.scala/commit/e0aa796ed5b714abad940adec288dbfabf1facc3"
        },
        "date": 1759534745482,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.3931903310132,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.273619535825174,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.957942038620953,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.221461365588422,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022368566755481135,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7920413262884636,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07373614722498754,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23093486150454642,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.83664504823325,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21693196564766842,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.806969137281012,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0894099297044906,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0909408869513275,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.62734504468035,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3741229577517553,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14504827159865036,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.54336248939264,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16828409125175528,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5876546431869273,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.48994795073528374,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.208901922621315,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 674.8456583225519,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5430983520100754,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.6383086347859,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.39798271494244314,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 676.8511142735304,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5273955898105702,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022924197792619415,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.453331654633417,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5328723560241315,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.956897837337104,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.358251944777834,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02143645104897981,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.473846277486998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.917295151167721,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01771805191051425,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.911147813546815,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.669693346771186,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0143412625236436,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017710672999111464,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001560925105425702,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8751683948787072,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02293848478667388,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.567031007036267,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015532934949418489,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8560545295285427,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.222880333333336,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.026972666666666,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "e0aa796ed5b714abad940adec288dbfabf1facc3",
          "message": "Update sbt-jmh to 0.4.8",
          "timestamp": "2025-09-29T09:15:50Z",
          "url": "https://github.com/folone/poi.scala/commit/e0aa796ed5b714abad940adec288dbfabf1facc3"
        },
        "date": 1759692480918,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.82672024350686,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2584104001983734,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.927612390634888,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.206911459575389,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022103309088836863,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8307301028898602,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0744367054476616,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23208155287382018,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.48769673852121,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21260669742588378,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7416295250184013,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0510822706327432,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08936980766008863,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 40.91896978612611,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4636710898497084,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14477423570114598,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 49.02247110303706,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16485398340664245,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5593206288061575,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5009260708801956,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 49.69142110239197,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 648.681042671741,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5031335393151986,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.887748015742304,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4104852951147125,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 677.8344754554969,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5053997467320892,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.024243084201453352,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.51646011770625,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5441261992663178,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9444266048079811,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.650903795936916,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02213150766631768,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3429232337078325,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.869641363747057,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.018983708373332058,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.947052876050213,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7338920995403373,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0511647492401375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017266662365291657,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015142279967267048,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8841068068642144,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.024641169399536422,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 3.041339728609192,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001592149919578566,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9098721480647232,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.894411666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 29.851307666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "1512f83b36b136bb2767cec766e8338e6590f622",
          "message": "Update sbt, scripted-plugin to 1.11.7",
          "timestamp": "2025-10-05T19:12:51Z",
          "url": "https://github.com/folone/poi.scala/commit/1512f83b36b136bb2767cec766e8338e6590f622"
        },
        "date": 1759702622356,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.16883013215476,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2182911235435656,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.587216051929014,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.161616895517048,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022934422742884965,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8447986332604736,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07421511335113395,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23513483325308412,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 40.233705608548185,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.24777953953303494,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.5947831967431232,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1792656007492568,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08798358226391124,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 45.568859073440215,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5136314361349836,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.12419125307563592,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 49.57962808034517,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16445740232475098,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6372126227776354,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.47929269210280034,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 62.56463655411566,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 607.8338897389033,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5239797782909575,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.26517818607077,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6112488050124035,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 610.0088278497317,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5161705706301343,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02386912504935366,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.123900353228949,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6159479008114701,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8613554402976176,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.402027417913686,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021888172183475947,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6121393816361487,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 8.278570868288275,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.018717213992713123,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.101808129647014,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.5821126561900658,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0952549824603226,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016905797420786822,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015854108144870715,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9311722611139295,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021978265633909134,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7152887780473765,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015010561613068567,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9868756143661366,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.577697333333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.416296333333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "1512f83b36b136bb2767cec766e8338e6590f622",
          "message": "Update sbt, scripted-plugin to 1.11.7",
          "timestamp": "2025-10-05T19:12:51Z",
          "url": "https://github.com/folone/poi.scala/commit/1512f83b36b136bb2767cec766e8338e6590f622"
        },
        "date": 1760002289344,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.12971841643052,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.219638960706082,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.81098281137577,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.046665310138464,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02322935187948172,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8156041587572721,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0710794442132701,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2536626495843475,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.61930183984119,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.21839777550982017,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9044723318945287,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.05856127428794,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09189018222673728,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.51345988843873,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.41353464370904425,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14727088939926786,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.9209231180205,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17000733977933957,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5893671016498927,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5035885962036678,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 62.63913884377454,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 680.0228670062439,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5420216600359368,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.559735693081414,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4099294727347626,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 602.6581239584663,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5444896437937878,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023318339433878624,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.532619360152606,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5418353443163545,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9650429086872178,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 13.81420066923516,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021565779851737677,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3959199429139617,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.799551314000736,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017884585326914455,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.82800114184095,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7049999625934316,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0495476534192316,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01625362544113776,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016758587994386987,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9125032105055488,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02156339125794153,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4824241598794785,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015046971005361822,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8460829826397138,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 28.13607,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.269063666666668,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "1512f83b36b136bb2767cec766e8338e6590f622",
          "message": "Update sbt, scripted-plugin to 1.11.7",
          "timestamp": "2025-10-05T19:12:51Z",
          "url": "https://github.com/folone/poi.scala/commit/1512f83b36b136bb2767cec766e8338e6590f622"
        },
        "date": 1760045000617,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.745122428630104,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2450434092129745,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.94333084109972,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.285541703181093,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022738598940677795,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7697819709250633,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0693213454495466,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23863058938665466,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.46950297419611,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22736310565381576,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9189715629517654,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0989748193226074,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09058435589376235,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.653751962024565,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4009979277858308,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14534888873769977,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.06590073578061,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17069325301831265,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5951954308584191,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5031654329110056,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.895597016184034,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 672.1311384482967,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.537271760418782,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.52736298107995,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4153493448080268,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 702.6394200688185,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.531496272014387,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022884195834259508,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.397514719169546,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5121159102328282,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9050601508224917,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.838548286734456,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022928904755406685,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3576587691980606,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.7291541348403765,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01761759042753904,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.805010330546453,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7352405313640022,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.005246493079478,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016144263781196277,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015015592351838671,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.904084441663906,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021391662712462758,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.492101823997501,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014981832114334434,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8820154021317006,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 25.182814333333337,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 28.317208333333337,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "e3f04ca5f72da6cdfe282021d0cf77fbf04b2b80",
          "message": "Update sbt-scalafix to 0.14.4",
          "timestamp": "2025-10-09T21:09:48Z",
          "url": "https://github.com/folone/poi.scala/commit/e3f04ca5f72da6cdfe282021d0cf77fbf04b2b80"
        },
        "date": 1760046624211,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.910120327381186,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2547799487166815,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.636569703935777,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.279548004423657,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022975021869486835,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8048336816386816,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07376206860068601,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24131756745956395,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 41.3278594701879,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.19321256774384357,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9989359216497236,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0950625594289132,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08696072645491422,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.371618175521064,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3515949764685765,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1288869002346912,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 48.26747546147174,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16974002579286318,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.594750725644942,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4914744083400985,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.657828611209254,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 620.9381955392682,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5419047401309982,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.47552357794544,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3224234233224479,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 743.7774318168136,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5396446135411486,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.024033955539825864,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.045807329208715,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5424307643791116,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9593889780816506,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.176210197139703,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021562724099760407,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.263466184077542,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.201767902837069,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017954440625341687,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.325804358907282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6955676225257483,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0539806460588843,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019019496747583835,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001743696178108118,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9828808769412263,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02294486271395081,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.9949780624630686,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016026375246983385,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.894340222153766,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 27.045412666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.189901333333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Scala Steward",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "kenji yoshida",
            "username": "xuwei-k",
            "email": "6b656e6a69@gmail.com"
          },
          "id": "e3f04ca5f72da6cdfe282021d0cf77fbf04b2b80",
          "message": "Update sbt-scalafix to 0.14.4",
          "timestamp": "2025-10-09T21:09:48Z",
          "url": "https://github.com/folone/poi.scala/commit/e3f04ca5f72da6cdfe282021d0cf77fbf04b2b80"
        },
        "date": 1760314498226,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.401342209320475,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2511249058061698,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.2325647931578,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.216535849069166,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02273875668632045,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8050584497111541,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07489023076942294,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23710767198812954,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.5648607408715,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1978893637993837,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0135458226618383,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.079415624301357,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08820279156062535,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.49180571756906,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3737068077409388,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1325530944572551,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.358740212132055,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16628200811444885,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5831271885113214,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.47288351747469826,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.70972820223108,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 636.3960944316289,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.517918204668945,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.29900567538983,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.43222291295444243,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 677.4351982851645,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5202277024406587,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023015231291462435,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.33017462268572,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5562131223273183,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9139961489322405,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.353498455515833,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0213960211202342,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.40178082492813,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.831416072546088,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01783568238549204,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.839547797295115,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6389954727275753,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.020509280931388,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016140079127475754,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015909552539890785,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8663214928272045,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02148056511182772,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.554600369006052,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015417493857770898,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8643754589465225,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.444761333333332,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 49.796160333333326,
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
          "id": "8d130a590faa6e08e4c77576a8bce89614766ffc",
          "message": "Bump peter-evans/create-or-update-comment from 4 to 5\n\nBumps [peter-evans/create-or-update-comment](https://github.com/peter-evans/create-or-update-comment) from 4 to 5.\n- [Release notes](https://github.com/peter-evans/create-or-update-comment/releases)\n- [Commits](https://github.com/peter-evans/create-or-update-comment/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: peter-evans/create-or-update-comment\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2025-10-13T00:01:03Z",
          "url": "https://github.com/folone/poi.scala/commit/8d130a590faa6e08e4c77576a8bce89614766ffc"
        },
        "date": 1760345221071,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.92513819843081,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2350854593564595,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.35316215088027,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.1108751008498015,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023126839799374042,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.8413519210805056,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07319095050403411,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24475530696686384,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.08647957385652,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22371578312226417,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9313007858105344,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0462638817129803,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08981191137811548,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.49072978215058,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.42262772345751554,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14463488204148495,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.07274237341413,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17201862634593265,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5856879649703786,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4940564883977389,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.90288791635237,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 638.0649247517229,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5289090970636015,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.54741458786969,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.33213667083896997,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 682.5262829755102,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5389920027314095,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02354529089071818,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.564436347457462,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.52017997816419,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9212873302106498,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.488964342567922,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021231578352716062,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4568660922878864,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 8.039414081425535,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017627776907942753,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.858321445631974,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6942073181959862,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0050718351661927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016546047244759277,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001581114366901997,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8388310152228111,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021600723958337835,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.6516507975013317,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015282046538639456,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9243211607056925,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.131212666666666,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 26.07333733333333,
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
          "id": "ab6c3e589de4f624dbadbc71881ae9af939f10f3",
          "message": "rm unmanaged scala versions",
          "timestamp": "2025-10-14T08:41:20Z",
          "url": "https://github.com/folone/poi.scala/commit/ab6c3e589de4f624dbadbc71881ae9af939f10f3"
        },
        "date": 1760431329785,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.33540086834125,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2609146038491394,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.096344493706454,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.1984303279140125,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02273608196967589,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.821127716187639,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0728966815494587,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24939494249532013,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.163763597226385,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22285349569955643,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9071158951367289,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0831795904895167,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09015047130064219,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.291634005476375,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.45027567199683893,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13723091183135788,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.00321908357665,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17005405817636796,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5898895363916288,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.493080577797154,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.20381330952906,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 676.9479948685546,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5378292940313606,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.499541937671765,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3488194890050643,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 647.740698097912,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5339068873330584,
            "unit": "ops/ms",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023135863383407465,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.4794016091809015,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5218082228775137,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9105583542768683,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.320971127898364,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0229890509884516,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.6802905447035545,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.93263548731333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017863002113364116,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.846377574786549,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6912033528749142,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0617336892196136,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016271792741646432,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014511889997395708,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.ComprehensivePoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8828583243830728,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.024250525811432905,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.338685752905555,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014679672959120051,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9374026346093995,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 18.723435,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 19.233378666666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}