// bs-8 battery holder for cr2032

module.exports = {
  params: {
    designator: 'COIN',
    side: 'F',
    BAT_P: { type: 'net', value: 'BAT_P' },
    GND: { type: 'net', value: 'GND' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "cr2032"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd roundrect (at -10.7 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 4.3 2.8) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15)  ${p.GND})`);
fp.push(`(pad "1" smd roundrect (at -10.7 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 4.3 2.8) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.15)  ${p.GND})`);
fp.push(`(pad "2" smd roundrect (at 11.1 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 3.5 3.8) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.36) (chamfer_ratio 0) (chamfer top_left bottom_left)  ${p.BAT_P})`);
fp.push(`(pad "2" smd roundrect (at 11.1 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 3.5 3.8) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.36) (chamfer_ratio 0) (chamfer top_left bottom_left)  ${p.BAT_P})`);

// Drawings on B.SilkS
fp.push(`(fp_line (start -9.845513 ${flipN(flip, 7.846149)}) (end 8.445512 ${flipN(flip, 7.846149)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -9.845512 ${flipN(flip, -7.845)}) (end 8.445513 ${flipN(flip, -7.845)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start -9.845513 ${flipN(flip, 7.846151)}) (mid -12.75 ${flipN(flip, 0)}) (end -9.845513 ${flipN(flip, -7.846151)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start -8.488527 ${flipN(flip, 7.838453)}) (mid -11.75 ${flipN(flip, 0)}) (end -8.488527 ${flipN(flip, -7.838453)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start 7.088527 ${flipN(flip, -7.838453)}) (mid 10.35 ${flipN(flip, 0)}) (end 7.088527 ${flipN(flip, 7.838453)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start 8.445513 ${flipN(flip, -7.846151)}) (mid 11.35 ${flipN(flip, 0)}) (end 8.445513 ${flipN(flip, 7.846151)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_text user "-" (at -12.85 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 2 2) (thickness 0.4) (bold yes)) (justify left${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "cr2032" (at -0.7 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.2) (bold yes)) (justify${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "+" (at 12.85 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 2 2) (thickness 0.4) (bold yes)) (justify right${ flip ? "" : " mirror"})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -9.845513 ${flipN(flip, 7.846149)}) (end 8.445512 ${flipN(flip, 7.846149)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -9.845512 ${flipN(flip, -7.845)}) (end 8.445513 ${flipN(flip, -7.845)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -9.845513 ${flipN(flip, 7.846151)}) (mid -12.75 ${flipN(flip, 0)}) (end -9.845513 ${flipN(flip, -7.846151)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -8.488527 ${flipN(flip, 7.838453)}) (mid -11.75 ${flipN(flip, 0)}) (end -8.488527 ${flipN(flip, -7.838453)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 7.088527 ${flipN(flip, -7.838453)}) (mid 10.35 ${flipN(flip, 0)}) (end 7.088527 ${flipN(flip, 7.838453)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 8.445513 ${flipN(flip, -7.846151)}) (mid 11.35 ${flipN(flip, 0)}) (end 8.445513 ${flipN(flip, 7.846151)}) (stroke (width 0.2) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_text user "+" (at 12.85 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 2 2) (thickness 0.4) (bold yes)) (justify left${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "-" (at -12.85 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 2 2) (thickness 0.4) (bold yes)) (justify right${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "cr2032" (at -0.7 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.2) (bold yes)) (justify${ flip ? " mirror" : ""})))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at -1.9 ${flipN(flip, -0.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "cr2032" (at -1.9 ${flipN(flip, 1)} ${flipR(flip, p.r + 22.5) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at -1.9 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at -1.9 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

