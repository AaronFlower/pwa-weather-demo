<template>
	<div class="dialog-container-layer" v-if="show">
		<div class="dialog">
			<div class="dialog-title">Add New City</div>
			<div class="dialog-body">
				<select id="selectCityToAdd" v-model="woeid">
					<option value="2151849">Shanghai</option>
					<option value="2357536">Austin, TX</option>
					<option value="2367105">Boston, MA</option>
					<option value="2379574">Chicago, IL</option>
					<option value="2459115">New York, NY</option>
					<option value="2475687">Portland, OR</option>
					<option value="2487956">San Francisco, CA</option>
					<option value="2490383">Seattle, WA</option>
				</select>
			</div>
			<div class="dialog-footer">
				<button id="addCity" @click="add">Add</button>
				<button id="addCancel" @click="cancel">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			show: {
				default: false,
				type: Boolean
			}
		},
		data () {
			return {
				woeid: '2151849'
			}
		},
		methods: {
			add () {
				this.$emit('on-confirm', this.woeid)
			},
			cancel () {
				this.$emit('on-cancel')
			}
		}
	}
</script>

<style>
	.dialog-container-layer {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.57);
	}
	.dialog {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #FFF;
		border-radius: 2px;
		min-width: 280px;
	}
	.dialog {
		& > div {
			padding: 15px 25px;
		}
		& .dialog-title {
			font-size: 1.25em;
		}
		& .dialog-body #selectCityToAdd{
			width: 100%;
			font-size: 2em;
		}
		& .dialog-footer {
			display: flex;
			justify-content: flex-end;
		}
		& button {
			margin-right: 5px;
		}
	}
</style>