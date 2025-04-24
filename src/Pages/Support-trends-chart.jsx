import { useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

// Sample data for the chart
const monthlyData = [
  { month: "Jan", tickets: 150 },
  { month: "Feb", tickets: 220 },
  { month: "Mar", tickets: 180 },
  { month: "Apr", tickets: 170 },
  { month: "May", tickets: 190 },
  { month: "Jun", tickets: 210 },
  { month: "Jul", tickets: 230 },
  { month: "Aug", tickets: 190 },
  { month: "Sep", tickets: 150 },
  { month: "Oct", tickets: 170 },
  { month: "Nov", tickets: 220 },
  { month: "Dec", tickets: 200 },
]

export default function SupportTrendsChart() {
  const [timeframe, setTimeframe] = useState("Monthly")

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-medium">Support Trends</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 px-3">
              {timeframe} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTimeframe("Daily")}>Daily</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("Weekly")}>Weekly</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("Monthly")}>Monthly</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("Yearly")}>Yearly</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            tickets: {
              label: "Tickets",
              color: "hsl(24, 100%, 65%)",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(24, 100%, 65%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(24, 100%, 65%)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} domain={[0, 250]} tickCount={6} />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
              <Area
                type="monotone"
                dataKey="tickets"
                stroke="hsl(24, 100%, 65%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorTickets)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
