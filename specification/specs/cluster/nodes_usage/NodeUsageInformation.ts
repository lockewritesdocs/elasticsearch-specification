class NodeUsageInformation {
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	timestamp: Date;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	since: Date;
	rest_actions: Dictionary<string, integer>;
}
