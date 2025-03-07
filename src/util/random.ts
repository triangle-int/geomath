import {
	add,
	mul,
	cross,
	coord2vec,
	vec2coord,
	type Coord,
	type Vector3,
	norm,
} from "..";
import { earthRadius } from ".";

function randomVectorInCone(z: Vector3, angle: number): Vector3 {
	const axis = z.z > 0.9 ? { x: 1, y: 0, z: 0 } : { x: 0, y: 0, z: 1 };
	const x = norm(cross(z, axis));
	const y = norm(cross(z, x));

	const theta = Math.random() * angle;
	const phi = Math.random() * Math.PI * 2;

	const zPart = mul(z, Math.cos(theta));
	const xPart = mul(x, Math.sin(theta) * Math.cos(phi));
	const yPart = mul(y, Math.sin(theta) * Math.sin(phi));

	return add(zPart, add(xPart, yPart));
}

/**
 * Returns random point on earth's surface in given radius.
 * Radius is measured in meters.
 */
export function randomPointInRadius(center: Coord, r: number): Coord {
	const angle = r / earthRadius;
	return vec2coord(randomVectorInCone(coord2vec(center), angle));
}
