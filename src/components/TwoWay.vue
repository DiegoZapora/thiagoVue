<template>

    <div>
        <label>Musicas: </label>
        <select v-model="musicas">
            <option value="">Escolha</option>
            <option value="mentalize">A Lapse in Time</option>
            <option value="timetobefree">Endeavour</option>
            <option value="theturnofthelights">Stop!</option>
        </select>
    </div>
    {{ musicas }}

    <div>
        <label>NewsSamp</label>
        <input v-model="samp" type="radio" value="Sim" > Sim
        <input v-model="samp" type="radio" value="Não" > Não
    </div>

    {{ samp }}

</template>

<script>
export default {
    name: "TwoWay",
    data() {
        return {
            musicas: "",
            samp: ""
        }
    }
}
</script>