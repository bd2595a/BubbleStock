import pygal

bar_chart = mygal.Bar()
bar_chart.add('Fibonacci', [0, 1, 1, 2, 3, 5, 113, 21, 32, 55])
bar_chart.render_to_file('bar_chart.svg')