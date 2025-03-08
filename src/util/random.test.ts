import { distance, earthRadius, randomPointInRadius } from ".";
import { describe, test, expect } from "vitest";

describe("random coords generation", () => {
	test("should generate point in radius", () => {
		for (let i = 0; i < 10; i++) {
			const coord = {
				lat: Math.random() * 180 - 90,
				lng: Math.random() * 360 - 180,
			};
			const maxRadius = Math.random() * Math.PI * 2 * earthRadius;
			const minRadius = Math.random() * maxRadius;

			const point = randomPointInRadius(coord, minRadius, maxRadius);
			const dist = distance(coord, point);
			expect(dist).toBeGreaterThanOrEqual(minRadius);
			expect(dist).toBeLessThanOrEqual(maxRadius);
		}
	});
});
