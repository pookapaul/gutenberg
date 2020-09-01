const ENTITY_FIRST_INSTANCE = 1;
const ENTITY_DUPLICATE_INSTANCE = 2;

const ENTITY_INSTANCES = {};

export function setupEntityInstance( entityId, instanceId ) {
	if ( ! entityId || ! instanceId ) {
		return;
	}
	if ( ! ENTITY_INSTANCES[ entityId ] ) {
		ENTITY_INSTANCES[ entityId ] = {};
		ENTITY_INSTANCES[ entityId ][ instanceId ] = ENTITY_FIRST_INSTANCE;
	} else {
		ENTITY_INSTANCES[ entityId ][ instanceId ] = ENTITY_DUPLICATE_INSTANCE;
	}
}

export function removeEntityInstance( entityId, instanceId ) {
	if (
		entityId &&
		instanceId &&
		ENTITY_INSTANCES[ entityId ]?.[ instanceId ]
	) {
		delete ENTITY_INSTANCES[ entityId ][ instanceId ];
	}
}

export function isDuplicateEntityInstance( entityId, instanceId ) {
	return (
		entityId &&
		instanceId &&
		ENTITY_INSTANCES[ entityId ]?.[ instanceId ] ===
			ENTITY_DUPLICATE_INSTANCE
	);
}
