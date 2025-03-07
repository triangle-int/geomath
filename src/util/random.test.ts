import { describe, test, expect } from "bun:test";
import { distance, earthRadius, randomPointInRadius } from ".";

describe("random coords generation", () => {
	test("should generate point in radius", () => {
		for (let i = 0; i < 10; i++) {
			const coord = {
				lat: Math.random() * 180 - 90,
				lng: Math.random() * 360 - 180,
			};
			const radius = Math.random() * Math.PI * 2 * earthRadius;

			const point = randomPointInRadius(coord, radius);
			const dist = distance(coord, point);
			expect(dist).toBeLessThanOrEqual(radius);
		}
	});
});
