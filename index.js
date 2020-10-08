$(document).ready(function () {
        var ar = $('ul#tasks li div.class-count span')
        var tmp = []
        $.each(ar, function (i, val) {
            tmp[i] = (val.innerText)
        })
        var total = []
        var present = []
        $.each(tmp, function (i, val) {
            var t = []
            t = val.split('/')
            present[i] = parseInt(t[0])
            total[i] = parseInt(t[1])

        })
        var finalAttendance=0
        var totalpresent = 0
        var totaltotal = 0
        $.each(present, function (i, val) {
            totalpresent += val
        })
        alert("total present:"+totalpresent);
        $.each(total, function (i, val) {
            totaltotal += val
        })
        alert("total classes held:"+totaltotal);
        finalAttendance = (totalpresent * 100) / totaltotal
        $('h4.widget-header').click(function(){
            alert("Attendance:")

        })

    })
