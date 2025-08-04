# Makefile for poi.scala project
# Common targets for Scala development workflow

.PHONY: help compile test test-only test-quick clean package run console scalastyle docs publish-local \
        deps update watch-compile watch-test format format-check test-integration test-unit \
        test-laws test-primitives test-features test-core test-cats test-scalaz test-async \
        benchmarks dev-setup dev pre-release info check-sbt \
        cross-compile cross-test cross-test-only cross-package cross-publish-local cross-clean

# Default target
help:
	@echo "Available targets:"
	@echo ""
	@echo "Building:"
	@echo "  compile      - Compile all sources"
	@echo "  clean        - Clean all build artifacts"
	@echo "  package      - Create JAR package"
	@echo "  cross-compile - Cross-compile for all Scala versions"
	@echo "  cross-package - Cross-compile and package for all Scala versions"
	@echo ""
	@echo "Testing:"
	@echo "  test         - Run all tests"
	@echo "  test-only    - Run a specific test (usage: make test-only TEST=TestName)"
	@echo "  test-quick   - Run only failed tests from last run"
	@echo "  test-integration - Run integration tests only"
	@echo "  test-laws    - Run typeclass and monoid law tests"
	@echo "  test-primitives - Run primitive class tests (Cell, Row, etc.)"
	@echo "  test-features - Run enhanced feature tests"
	@echo "  test-core    - Run core module tests only"
	@echo "  test-cats    - Run cats module tests only"
	@echo "  test-scalaz  - Run scalaz module tests only"
	@echo "  test-async   - Run async module tests only"
	@echo "  cross-test   - Run all tests across all Scala versions"
	@echo "  cross-test-only - Run specific test across all Scala versions"
	@echo ""
	@echo "Development:"
	@echo "  run          - Run the main application (if applicable)"
	@echo "  console      - Start Scala REPL with project classpath"
	@echo "  watch-compile - Continuous compilation"
	@echo "  watch-test   - Continuous testing"
	@echo "  dev          - Quick development cycle (clean, compile, test-quick)"
	@echo "  dev-setup    - Full development setup (clean, compile, test)"
	@echo ""
	@echo "Quality:"
	@echo "  scalastyle   - Run scalastyle checks"
	@echo "  format       - Format code"
	@echo "  format-check - Check code formatting"
	@echo ""
	@echo "Benchmarks:"
	@echo "  benchmarks   - Run performance benchmarks"
	@echo ""
	@echo "Documentation & Publishing:"
	@echo "  docs         - Generate documentation"
	@echo "  publish-local - Publish to local repository"
	@echo "  cross-publish-local - Publish all Scala versions to local repository"
	@echo "  pre-release  - Run all pre-release checks"
	@echo ""
	@echo "Utilities:"
	@echo "  deps         - Show dependency tree"
	@echo "  update       - Update dependencies"
	@echo "  info         - Show project information"
	@echo "  cross-clean  - Clean all cross-compiled artifacts"
	@echo ""
	@echo "Examples:"
	@echo "  make test-only TEST='*PoiSpec'"
	@echo "  make test-only TEST='*Integration*'"
	@echo "  make test-only TEST='info.folone.poi.MonoidLawsSpec'"
	@echo "  make cross-test-only TEST='*PoiSpec'"
	@echo "  make cross-compile"

# Basic compilation
compile:
	./sbt compile

# Run all tests
test:
	./sbt test

# Run specific test
# Usage: make test-only TEST=TestName
test-only:
	@if [ -z "$(TEST)" ]; then \
		echo "Usage: make test-only TEST=TestName"; \
		echo "Example: make test-only TEST=PoiSpec"; \
		exit 1; \
	fi
	./sbt "testOnly $(TEST)"

# Run only previously failed tests
test-quick:
	./sbt testQuick

# Clean build artifacts
clean:
	./sbt clean

# Create JAR package
package:
	./sbt package

# Run main application (if applicable)
run:
	./sbt run

# Start Scala console/REPL
console:
	./sbt console

# Run scalastyle checks
scalastyle:
	./sbt scalastyle

# Generate documentation
docs:
	./sbt doc

# Publish to local repository
publish-local:
	./sbt publishLocal

# Show dependency tree
deps:
	./sbt dependencyTree

# Update dependencies
update:
	./sbt update

# Continuous compilation (watches for file changes)
watch-compile:
	./sbt ~compile

# Continuous testing (watches for file changes)
watch-test:
	./sbt ~test

# Format code
format:
	./sbt scalafmtAll scalafmtSbt

# Check code formatting
format-check:
	./sbt scalafmtCheckAll scalafmtSbtCheck

# Integration test specific targets
test-integration:
	./sbt "testOnly *IntegrationSpec"

test-unit:
	./sbt "testOnly * -- -l integration"

test-laws:
	./sbt "testOnly *LawsSpec"

test-primitives:
	./sbt "testOnly *CellSpec *RowSpec *WorkbookSpec *CorePrimitivesSpec"

test-features:
	./sbt "testOnly *EnhancedSheetSpec *ExtendedCellTypesSpec *EnhancedStylingSpec *DataValidationSpec *ErrorHandlingSpec"

# Module-specific test targets
test-core:
	./sbt "core/test"

test-cats:
	./sbt "cats/test"

test-scalaz:
	./sbt "scalaz/test"

test-async:
	./sbt "async/test"

# Benchmark targets
benchmarks:
	./sbt "benchmarks/Jmh/run"

# Cross-compilation targets
# Compile for all supported Scala versions
cross-compile:
	./sbt +compile

# Test across all supported Scala versions
cross-test:
	./sbt +test

# Run specific test across all Scala versions
# Usage: make cross-test-only TEST=TestName
cross-test-only:
	@if [ -z "$(TEST)" ]; then \
		echo "Usage: make cross-test-only TEST=TestName"; \
		echo "Example: make cross-test-only TEST=PoiSpec"; \
		exit 1; \
	fi
	./sbt "+testOnly $(TEST)"

# Package for all supported Scala versions
cross-package:
	./sbt +package

# Publish all Scala versions to local repository
cross-publish-local:
	./sbt +publishLocal

# Clean all cross-compiled artifacts
cross-clean:
	./sbt +clean

# Development helpers
dev-setup: clean compile test
	@echo "Development environment setup complete!"

# Quick development cycle
dev: clean compile test-quick
	@echo "Quick development cycle complete!"

# Release preparation
pre-release: clean compile test scalastyle docs
	@echo "Pre-release checks complete!"

# Show project information
info:
	@echo "Project: poi.scala"
	@echo "Description: Scala library for Excel file operations"
	@echo "Build tool: sbt"
	@echo "Scala version: 2.12.20 (default)"
	@echo "Cross Scala versions: 2.12.20, 2.13.16, 3.3.6"
	@echo "SBT version: $(shell ./sbt sbtVersion 2>/dev/null | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+' | head -1)"
	@echo ""
	@echo "Modules:"
	@echo "  - core: Core Excel operations (required)"
	@echo "  - cats: Cats functional programming integration"
	@echo "  - scalaz: Scalaz functional programming integration"
	@echo "  - async: Asynchronous operations"
	@echo "  - fatjar: Fat JAR assembly"
	@echo "  - benchmarks: Performance benchmarks"
	@echo ""
	@echo "Test count: $(shell find poi-scala-*/src/test -name '*.scala' 2>/dev/null | wc -l | tr -d ' ')"

# Check if sbt is available
check-sbt:
	@if [ ! -f "./sbt" ]; then \
		echo "Error: ./sbt script not found"; \
		echo "Make sure you're in the project root directory"; \
		exit 1; \
	fi

# All targets depend on sbt being available
compile test test-only test-quick clean package run console scalastyle docs publish-local deps update cross-compile cross-test cross-test-only cross-package cross-publish-local cross-clean: check-sbt
