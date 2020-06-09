class GraphsController < ApplicationController
  def index
    gon.weight_records = Graph.chart_data(current_user)
    gon.recorded_dates = current_user.graphs.map(&:date)
  end

  def create
    # binding.pry
    @graph = current_user.graphs.build(graph_params)
    date = @graph.date.strftime('%Y/%-m/%-d')

    if @graph.save
      flash[:notice] = "#{date}の記録を追加しました"
    else
      flash[:alert] = 'エラーが発生しました'
    end

    redirect_to root_path
  end

  def update
  end


  private

  def graph_params
    params.require(:graph).permit(:date, :weight)
  end
end
