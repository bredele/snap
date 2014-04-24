
/**
 * Expose 'snap'
 */

module.exports = snap;


/**
 * Snapshot and return
 * data url webp (with png fallback).
 *
 * Examples:
 *
 *   snap(video);
 *
 * @param {Element} node
 * @param {String} 
 * @api public
 */

function snap(node) {
	var canvas = document.createElement('canvas');
	canvas.width = node.clientWidth;
	canvas.height = node.clientHeight;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(node, 0, 0);
	return canvas.toDataURL('image/webp');
}
