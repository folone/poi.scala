window.BENCHMARK_DATA = {
  "lastUpdate": 1754205820916,
  "repoUrl": "https://github.com/folone/poi.scala",
  "entries": {
    "JMH Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "folone",
            "username": "folone"
          },
          "committer": {
            "name": "folone",
            "username": "folone"
          },
          "id": "53417a16d30c3af4d4d6cccf6d68f2ad46fd1b30",
          "message": "Refactor into separate modules.",
          "timestamp": "2025-07-30T18:17:56Z",
          "url": "https://github.com/folone/poi.scala/pull/330/commits/53417a16d30c3af4d4d6cccf6d68f2ad46fd1b30"
        },
        "date": 1754205820576,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.90749973473295,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.05124185266883,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3821988470329512,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23829894146598737,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.173702644799553,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.021869401486906,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.357546317067195,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1839137396341886,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.08978533431123964,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09118187854353757,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09223698267449207,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 497.29871009099804,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 37.022893567668596,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.583579152175528,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.3976652854716961,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3752536838104298,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.47989800696743445,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14875215357455807,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1490887390759272,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.14756877684507616,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 558.9857810680633,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.49074582620598,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.969854210566785,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.0275836025986105,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17158351318865855,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.032583697797452196,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.169356459271404,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5947418401687043,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11667927765753053,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.010329377559778,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5028965164888942,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0910971363594843,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 516.547794225791,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 57.5202385979131,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.168533376571785,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 637.835846372179,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 649.1583396426433,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 638.6667531164178,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.958454585541685,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5244382441621596,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10085373537475532,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022798738455573515,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022717240142622108,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7687186460666775,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.224414877487461,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07152721414968248,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5115137945706587,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23131049516760913,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.887503751494139,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.932865311825646,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.068887490375856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.092787276178267,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001987974113005144,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021394893008077814,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11793750739584322,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.306952195339755,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4631925737740206,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.6779548141917124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.806198927505434,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.563061701139491,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 6.982228652083334,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.002764847186906914,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019184893800482373,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09156936895499772,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.48584730984963354,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.916510833859981,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.622914760606058,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.13716109810907978,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6413448251117149,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.678856360907048,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16187590924775677,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9982456802283348,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.949050660117056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001638269325322729,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016326793623273075,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08328551727262831,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0015942657083587656,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015131060648441521,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.001506031750718307,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16571982852926018,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.924551193479481,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.934680408051836,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}