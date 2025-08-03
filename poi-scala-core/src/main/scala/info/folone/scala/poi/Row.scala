package info.folone.scala.poi

class Row(val index: Int)(val cells: Set[Cell]) {

  def styles(sheetName: String): Map[CellStyle, List[CellAddr]] =
    cells.foldLeft(Map.empty[CellStyle, List[CellAddr]]) { (acc, cell) =>
      cell.style.fold(acc) { style =>
        val cellAddr = CellAddr(sheetName, index, cell.index)
        acc + (style -> (acc.getOrElse(style, List.empty) :+ cellAddr))
      }
    }

  override def equals(obj: Any): Boolean = obj match {
    case that: Row => this.index == that.index && this.cells == that.cells
    case _ => false
  }

  override def hashCode: Int = index.hashCode + cells.hashCode
}

object Row {
  def apply(index: Int)(cells: Set[Cell]): Row = new Row(index)(cells)
  def unapply(row: Row): Some[(Int, Set[Cell])] = Some((row.index, row.cells))
}
