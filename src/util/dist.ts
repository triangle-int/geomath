import { coord2vec, dot, type Coord } from "..";

/**
 * Earth's average (halfsum of equatorial and polar) radius in meters
 */
export const earthRadius = 6367444.65;

/**
 * Finds distance in meters between two points on earth's surface.
 */
export function distance(a: Coord, b: Coord): number {
	const prod = dot(coord2vec(a), coord2vec(b));
	const angle = Math.acos(prod);
	return angle * earthRadius;
}
