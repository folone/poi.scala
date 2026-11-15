package info.folone.poi

/**
 * Cross-version spelling of compound/intersection types.
 *
 * Scala 3.10 rejects `with` as a type operator (use `&` instead), while Scala 2 has no `&`. This alias lets shared
 * sources name the same type on every Scala version: `A with B with C` on Scala 2, `A & B & C` on Scala 3.
 */
object TypeCompat {
  type Intersection3[A, B, C] = A with B with C
}
