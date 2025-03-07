import type { Vector3 } from ".";

export type Coord = {
	readonly lat: number;
	readonly lng: number;
};

export function coord2vec(coord: Coord): Vector3 {
	const latRad = (coord.lat * Math.PI) / 180;
	const lngRad = (coord.lng * Math.PI) / 180;

	const z = Math.sin(latRad);
	const r = Math.cos(latRad);

	const x = Math.cos(lngRad) * r;
	const y = Math.sin(lngRad) * r;

	return { x, y, z };
}

export function vec2coord(vec: Vector3): Coord {
	const latRad = Math.asin(vec.z);
	const lngRad = Math.atan2(vec.y, vec.x);

	return {
		lat: (latRad * 180) / Math.PI,
		lng: (lngRad * 180) / Math.PI,
	};
}
