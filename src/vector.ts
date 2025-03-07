export type Vector3 = {
	readonly x: number;
	readonly y: number;
	readonly z: number;
};

export function add(a: Vector3, b: Vector3): Vector3 {
	return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

export function sub(a: Vector3, b: Vector3): Vector3 {
	return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

export function mul(a: Vector3, b: number): Vector3 {
	return { x: a.x * b, y: a.y * b, z: a.z * b };
}

export function dot(a: Vector3, b: Vector3): number {
	return a.x * b.x + a.y * b.y + a.z * b.z;
}

export function cross(v1: Vector3, v2: Vector3): Vector3 {
	return {
		x: v1.y * v2.z - v1.z * v2.y,
		y: v1.z * v2.x - v1.x * v2.z,
		z: v1.x * v2.y - v1.y * v2.x,
	};
}

export function lengthSqr(a: Vector3): number {
	return dot(a, a);
}

export function length(a: Vector3): number {
	return Math.sqrt(lengthSqr(a));
}

export function norm(a: Vector3): Vector3 {
	return mul(a, 1 / length(a));
}
